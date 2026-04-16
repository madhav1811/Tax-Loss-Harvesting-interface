import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '1.5rem 0',
      borderBottom: '1px solid var(--border-color)',
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-blue)' }}>KoinX</h2>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Tax Harvesting</span>
      </div>
      <a href="#" style={{ 
        color: 'var(--brand-blue)', 
        textDecoration: 'none', 
        fontSize: '0.875rem',
        fontWeight: 500
      }}>
        How it works?
      </a>
    </header>
  );
};
