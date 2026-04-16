import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const NotesBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius)',
      marginBottom: '2rem',
      overflow: 'hidden'
    }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          backgroundColor: '#F9FAFB'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle size={20} color="var(--brand-blue)" />
          <span style={{ fontWeight: 600, fontSize: '0.925rem' }}>Important Notes & Disclaimers</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      {isOpen && (
        <div style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Tax-Loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        </div>
      )}
    </div>
  );
};
