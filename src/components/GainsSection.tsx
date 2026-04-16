import React from 'react';
import { motion } from 'framer-motion';
import { CapitalGainsData } from '../types';

interface GainsCardProps {
  title: string;
  gains: CapitalGainsData | null;
  totalLabel: string;
  totalValue: number | null;
  theme: 'light' | 'blue';
  savings?: number;
}

const GainsCard: React.FC<GainsCardProps> = ({ title, gains, totalLabel, totalValue, theme, savings }) => {
  const isBlue = theme === 'blue';
  
  const formatValue = (val: number | null) => {
    if (val === null) return '$ -';
    const isNegative = val < 0;
    return (isNegative ? '- ' : '') + '$' + Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 0 });
  };

  const calculateNet = (profits: number | undefined, losses: number | undefined) => {
    return (profits ?? 0) - (losses ?? 0);
  };

  return (
    <div className="card" style={{
      flex: 1,
      minWidth: '320px',
      backgroundColor: isBlue ? 'var(--brand-blue)' : 'var(--bg-white)',
      color: isBlue ? 'white' : 'var(--text-main)',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      border: isBlue ? 'none' : '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'inherit' }}>{title}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 1.5fr) 1fr 1fr', gap: '0.75rem', fontSize: '1rem' }}>
        <div></div>
        <div style={{ textAlign: 'right', opacity: 0.6, fontSize: '0.875rem' }}>Short-term</div>
        <div style={{ textAlign: 'right', opacity: 0.6, fontSize: '0.875rem' }}>Long-term</div>

        <div style={{ opacity: 0.8 }}>Profits</div>
        <div style={{ textAlign: 'right', fontWeight: 500 }}>{formatValue(gains?.stcg?.profits ?? null)}</div>
        <div style={{ textAlign: 'right', fontWeight: 500 }}>{formatValue(gains?.ltcg?.profits ?? null)}</div>

        <div style={{ opacity: 0.8 }}>Losses</div>
        <div style={{ textAlign: 'right', fontWeight: 500 }}>{formatValue(-(gains?.stcg?.losses ?? 0))}</div>
        <div style={{ textAlign: 'right', fontWeight: 500 }}>{formatValue(-(gains?.ltcg?.losses ?? 0))}</div>

        <div style={{ fontWeight: 600, borderTop: '1px solid currentColor', paddingTop: '0.5rem', marginTop: '0.25rem', opacity: 0.9 }}>Net Capital Gains</div>
        <div style={{ textAlign: 'right', fontWeight: 700, borderTop: '1px solid currentColor', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
          {formatValue(calculateNet(gains?.stcg?.profits, gains?.stcg?.losses))}
        </div>
        <div style={{ textAlign: 'right', fontWeight: 700, borderTop: '1px solid currentColor', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
          {formatValue(calculateNet(gains?.ltcg?.profits, gains?.ltcg?.losses))}
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
        <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>
          {totalLabel}: 
          <span style={{ fontSize: '1.75rem', marginLeft: '0.75rem', fontWeight: 700 }}>
            {formatValue(totalValue)}
          </span>
        </div>
      </div>

      {savings !== undefined && savings > 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '10px',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>🎉</span>
          <span>You are going to save up to: <strong>{formatValue(savings)}</strong></span>
        </motion.div>
      )}
    </div>
  );
};

interface GainsSectionProps {
  preGains: CapitalGainsData | null;
  postGains: CapitalGainsData | null;
  stats: { preRealised: number, postRealised: number, savings: number } | null;
}

export const GainsSection: React.FC<GainsSectionProps> = ({ preGains, postGains, stats }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '1.5rem', 
      marginBottom: '2.5rem' 
    }}>
      <GainsCard 
        title="Pre Harvesting" 
        gains={preGains}
        totalLabel="Realised Capital Gains"
        totalValue={stats?.preRealised ?? null}
        theme="light"
      />
      <GainsCard 
        title="After Harvesting" 
        gains={postGains}
        totalLabel="Effective Capital Gains"
        totalValue={stats?.postRealised ?? null}
        theme="blue"
        savings={stats?.savings}
      />
    </div>
  );
};
