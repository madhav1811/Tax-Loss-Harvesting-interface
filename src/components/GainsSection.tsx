import React from 'react';
import { motion } from 'framer-motion';
import { CapitalGainsData } from '../types';

interface GainsCardProps {
  title: string;
  gains: CapitalGainsData | null;
  totalLabel: string;
  totalValue: number | null;
  theme: 'dark' | 'blue';
  savings?: number;
}

const GainsCard: React.FC<GainsCardProps> = ({ title, gains, totalLabel, totalValue, theme, savings }) => {
  const isDark = theme === 'dark';
  
  const formatValue = (val: number | null) => {
    if (val === null) return '₹-';
    return (val < 0 ? '-' : '') + '₹' + Math.abs(val).toLocaleString('en-IN', { minimumFractionDigits: 2 });
  };

  return (
    <div style={{
      flex: 1,
      minWidth: '280px',
      backgroundColor: isDark ? 'var(--dark-indigo)' : 'var(--brand-blue)',
      color: 'white',
      borderRadius: 'var(--radius)',
      padding: '2rem',
      position: 'relative',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <h3 style={{ fontSize: '1.125rem', opacity: 0.9 }}>{title}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '0.875rem' }}>
        <div style={{ opacity: 0.6 }}></div>
        <div style={{ opacity: 0.6 }}>Short-term</div>
        <div style={{ opacity: 0.6 }}>Long-term</div>

        <div>Profits</div>
        <div style={{ fontWeight: 500 }}>{formatValue(gains?.stcg?.profits ?? null)}</div>
        <div style={{ fontWeight: 500 }}>{formatValue(gains?.ltcg?.profits ?? null)}</div>

        <div>Losses</div>
        <div style={{ fontWeight: 500 }}>{formatValue(gains?.stcg?.losses ?? null)}</div>
        <div style={{ fontWeight: 500 }}>{formatValue(gains?.ltcg?.losses ?? null)}</div>

        <div style={{ fontWeight: 600 }}>Net Capital Gains</div>
        <div style={{ fontWeight: 600 }}>{formatValue((gains?.stcg?.profits ?? 0) - (gains?.stcg?.losses ?? 0))}</div>
        <div style={{ fontWeight: 600 }}>{formatValue((gains?.ltcg?.profits ?? 0) - (gains?.ltcg?.losses ?? 0))}</div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>{totalLabel}</div>
        <div style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.25rem' }}>
          {formatValue(totalValue)}
        </div>
      </div>

      {savings !== undefined && savings > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '8px',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>💡</span>
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
        theme="dark"
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
