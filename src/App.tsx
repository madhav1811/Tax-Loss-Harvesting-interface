import React from 'react';
import { Header } from './components/Header';
import { NotesBanner } from './components/NotesBanner';
import { GainsSection } from './components/GainsSection';
import { HoldingsTable } from './components/HoldingsTable';
import { useGainsLogic } from './hooks/useGainsLogic';
import './styles/index.css';

const App: React.FC = () => {
  const {
    holdings,
    initialGains,
    afterHarvestingGains,
    selectedCoins,
    toggleSelection,
    toggleAll,
    loading,
    stats
  } = useGainsLogic();

  if (loading) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'var(--bg-main)'
      }}>
        <div className="animate-pulse" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>
          Loading Tax Data...
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh' }}>
      <div style={{ borderTop: '2px dotted var(--border-color)', width: '100%' }}></div>
      <div className="container">
        <Header />
        
        <main>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Tax Harvesting</h1>
            <a href="#" style={{ 
              color: 'var(--brand-blue)', 
              textDecoration: 'none', 
              fontSize: '0.875rem',
              fontWeight: 500,
              borderBottom: '1px solid var(--brand-blue)'
            }}>
              How it works?
            </a>
          </div>

          <NotesBanner />
          
          <GainsSection 
            preGains={initialGains} 
            postGains={afterHarvestingGains} 
            stats={stats} 
          />


          <HoldingsTable 
            holdings={holdings}
            selectedCoins={selectedCoins}
            onToggle={toggleSelection}
            onToggleAll={toggleAll}
          />
        </main>

        <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center' }}>
          <p>© 2024 KoinX. Built with precision for tax-efficient crypto investing.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
