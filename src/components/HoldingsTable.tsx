import React from 'react';
import { Holding } from '../types';

interface HoldingsTableProps {
  holdings: Holding[];
  selectedCoins: Set<string>;
  onToggle: (coin: string) => void;
  onToggleAll: () => void;
}

export const HoldingsTable: React.FC<HoldingsTableProps> = ({ 
  holdings, 
  selectedCoins, 
  onToggle, 
  onToggleAll 
}) => {
  
  const allSelected = holdings.length > 0 && selectedCoins.size === holdings.length;

  const formatCurrency = (val: number) => {
    return '₹' + Math.abs(val).toLocaleString('en-IN', { minimumFractionDigits: 2 });
  };

  const renderGain = (val: number, balance: number) => {
    const isPositive = val >= 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ color: isPositive ? 'var(--success)' : 'var(--danger)', fontWeight: 500 }}>
          {isPositive ? '+' : '-'}{formatCurrency(val)}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {balance.toFixed(4)} {holdings[0]?.coin}
        </span>
      </div>
    );
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border-color)',
      overflowX: 'auto'
    }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '1.125rem' }}>Holdings</h3>
      </div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
        <thead>
          <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid var(--border-color)' }}>
            <th style={{ padding: '1.25rem' }}>
              <input 
                type="checkbox" 
                checked={allSelected} 
                onChange={onToggleAll}
                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
              />
            </th>
            <th style={headerStyle}>Asset</th>
            <th style={headerStyle}>Holdings <br/><span style={subHeaderStyle}>Current Value</span></th>
            <th style={headerStyle}>Current Price</th>
            <th style={headerStyle}>Short-term</th>
            <th style={headerStyle}>Long-term</th>
            <th style={headerStyle}>Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h, i) => (
            <tr key={h.coin + i} style={{ borderBottom: '1px solid var(--border-color)', height: '80px' }}>
              <td style={{ padding: '1.25rem' }}>
                <input 
                  type="checkbox" 
                  checked={selectedCoins.has(h.coin)} 
                  onChange={() => onToggle(h.coin)}
                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                />
              </td>
              <td style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={h.logo} alt={h.coin} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600 }}>{h.coin}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{h.coinName}</span>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{h.totalHolding.toFixed(4)} {h.coin}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{formatCurrency(h.totalHolding * h.currentPrice)}</span>
                </div>
              </td>
              <td style={{ padding: '1.25rem' }}>
                {formatCurrency(h.currentPrice)}
              </td>
              <td style={{ padding: '1.25rem' }}>
                {renderGain(h.stcg.gain, h.stcg.balance)}
              </td>
              <td style={{ padding: '1.25rem' }}>
                {renderGain(h.ltcg.gain, h.ltcg.balance)}
              </td>
              <td style={{ padding: '1.25rem' }}>
                {selectedCoins.has(h.coin) ? (
                  <span style={{ fontWeight: 500 }}>{h.totalHolding.toFixed(4)} {h.coin}</span>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: '1rem 1.5rem' }}>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          color: 'var(--brand-blue)', 
          fontWeight: 600, 
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}>
          View All
        </button>
      </div>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  padding: '1.25rem',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--text-muted)',
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 400,
};
