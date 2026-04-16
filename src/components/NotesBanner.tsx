import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

export const NotesBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius)',
      marginBottom: '2rem',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          backgroundColor: '#F9FAFB',
          borderBottom: isOpen ? '1px solid var(--border-color)' : 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ color: 'var(--brand-blue)', display: 'flex' }}>
            <Info size={20} fill="var(--brand-blue-light)" />
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.925rem', color: '#374151' }}>Important Notes & Disclaimers</span>
        </div>
        <div style={{ color: '#9CA3AF' }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isOpen && (
        <div style={{ padding: '1.25rem 2rem', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          <ul style={{ listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        </div>
      )}
    </div>
  );
};
