import { useState, useMemo, useEffect } from 'react';
import { Holding, CapitalGainsData, CategoryGains } from '../types';
import { fetchHoldings, fetchInitialGains } from '../services/api';

export const useGainsLogic = () => {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [initialGains, setInitialGains] = useState<CapitalGainsData | null>(null);
  const [selectedCoins, setSelectedCoins] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [h, g] = await Promise.all([fetchHoldings(), fetchInitialGains()]);
        setHoldings(h);
        setInitialGains(g.capitalGains);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleSelection = (coin: string) => {
    const newSelection = new Set(selectedCoins);
    if (newSelection.has(coin)) {
      newSelection.delete(coin);
    } else {
      newSelection.add(coin);
    }
    setSelectedCoins(newSelection);
  };

  const toggleAll = () => {
    if (selectedCoins.size === holdings.length) {
      setSelectedCoins(new Set());
    } else {
      setSelectedCoins(new Set(holdings.map(h => h.coin)));
    }
  };

  const afterHarvestingGains = useMemo(() => {
    if (!initialGains) return null;

    const poststcg: CategoryGains = { ...initialGains.stcg };
    const postltcg: CategoryGains = { ...initialGains.ltcg };

    holdings.forEach(h => {
      if (selectedCoins.has(h.coin)) {
        // STCG
        if (h.stcg.gain > 0) {
          poststcg.profits += h.stcg.gain;
        } else {
          poststcg.losses += Math.abs(h.stcg.gain);
        }

        // LTCG
        if (h.ltcg.gain > 0) {
          postltcg.profits += h.ltcg.gain;
        } else {
          postltcg.losses += Math.abs(h.ltcg.gain);
        }
      }
    });

    return { stcg: poststcg, ltcg: postltcg };
  }, [initialGains, holdings, selectedCoins]);

  const stats = useMemo(() => {
    if (!initialGains || !afterHarvestingGains) return null;

    const preRealised = 
      (initialGains.stcg.profits - initialGains.stcg.losses) + 
      (initialGains.ltcg.profits - initialGains.ltcg.losses);

    const postRealised = 
      (afterHarvestingGains.stcg.profits - afterHarvestingGains.stcg.losses) + 
      (afterHarvestingGains.ltcg.profits - afterHarvestingGains.ltcg.losses);

    const savings = preRealised > postRealised ? preRealised - postRealised : 0;

    return { preRealised, postRealised, savings };
  }, [initialGains, afterHarvestingGains]);

  return {
    holdings,
    initialGains,
    afterHarvestingGains,
    selectedCoins,
    toggleSelection,
    toggleAll,
    loading,
    stats
  };
};
