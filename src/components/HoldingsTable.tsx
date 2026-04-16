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

  const formatCurrency = (val: number, decimals = 2) => {
    return '$' + Math.abs(val).toLocaleString('en-US', { 
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals 
    });
  };

  const renderGain = (val: number, balance: number, coin: string) => {
    const isPositive = val >= 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ color: isPositive ? 'var(--success)' : 'var(--danger)', fontWeight: 600 }}>
          {isPositive ? '+' : '-'}{formatCurrency(val)}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {balance.toFixed(3)} {coin}
        </span>
      </div>
    );
  };

  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {/* Desktop Table */}
      <div className="table-responsive" style={{ display: 'block' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
          <thead>
            <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem 1.25rem', width: '48px' }}>
                <input 
                  type="checkbox" 
                  checked={allSelected} 
                  onChange={onToggleAll}
                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                />
              </th>
              <th style={headerStyle}>Asset</th>
              <th style={headerStyle}>Holdings <br/><span style={subHeaderStyle}>Current Market Rate</span></th>
              <th style={headerStyle}>Total Current Value</th>
              <th style={headerStyle}>Short-term</th>
              <th style={headerStyle}>Long-term</th>
              <th style={headerStyle}>Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => {
              const isSelected = selectedCoins.has(h.coin);
              return (
                <tr key={h.coin + i} style={{ 
                  borderBottom: '1px solid var(--border-color)', 
                  backgroundColor: isSelected ? '#F2F7FF' : 'transparent',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <input 
                      type="checkbox" 
                      checked={isSelected} 
                      onChange={() => onToggle(h.coin)}
                      style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img src={h.logo} alt={h.coin} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600 }}>{h.coinName}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{h.coin}</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 500 }}>{h.totalHolding.toFixed(5)} {h.coin}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {formatCurrency(h.currentPrice)}/BTC
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{ fontWeight: 600 }}>{formatCurrency(h.totalHolding * h.currentPrice)}</span>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    {renderGain(h.stcg.gain, h.stcg.balance, h.coin)}
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    {renderGain(h.ltcg.gain, h.ltcg.balance, h.coin)}
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    {isSelected ? (
                      <span style={{ fontWeight: 600 }}>{h.totalHolding.toFixed(4)} {h.coin}</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#fff' }}>
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
  padding: '1rem 1.25rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.025em'
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  textTransform: 'none'
};
