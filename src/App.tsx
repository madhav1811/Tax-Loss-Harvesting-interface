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
    <div className="container animate-fade-in">
      <Header />
      
      <main>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Tax Harvesting</h1>
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

      <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <p>© 2024 KoinX. Build with precision for tax-efficient crypto investing.</p>
      </footer>
    </div>
  );
};

export default App;
