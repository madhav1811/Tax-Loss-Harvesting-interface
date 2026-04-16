import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '1.25rem 0',
      borderBottom: '1px solid var(--border-color)',
      marginBottom: '1.5rem',
      backgroundColor: 'white'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="https://www.koinx.com/_next/static/media/Logo.5f00da84.svg" 
          alt="KoinX" 
          style={{ height: '24px' }} 
        />
      </div>
    </header>
  );
};
