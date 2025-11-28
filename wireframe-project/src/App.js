import React, { useState } from 'react';
import './App.css';

import SuccessScreen from './components/SuccessScreen';
import ErrorScreen from './components/ErrorScreen';
import AddCardScreen from './components/AddCardScreen';
import PayInvoiceScreen from './components/PayInvoiceScreen';
import InvoiceDetailScreen from './components/InvoiceDetailScreen';
import InvoiceHistoryScreen from './components/InvoiceHistoryScreen';
import InvoiceCard from './components/InvoiceCard';

import WalletScreen from './components/WalletScreen';

function App() {
  const [filter, setFilter] = useState('Todas');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [dni, setDni] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);

  // Screen state: add more screens including placeholders
  const [screen, setScreen] = useState('invoices');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  const [cards, setCards] = useState([
    { id: 1, type: 'Visa', number: '**** **** **** 1234', expiry: '12/28' },
    { id: 2, type: 'Mastercard', number: '**** **** **** 5678', expiry: '09/26' }
  ]);

  const invoices = [
    { id: 1, title: 'Periodo: 08/2025', amount: '$150.00', issueDate: '2023-10-01', dueDate: '2023-10-15', status: 'Pendiente' },
    { id: 2, title: 'Periodo: 09/2025', amount: '$50.00', issueDate: '2023-10-05', dueDate: '2023-10-20', status: 'Pagada' },
    { id: 3, title: 'Periodo: 10/2025', amount: '$80.00', issueDate: '2023-10-10', dueDate: '2023-10-25', status: 'Pendiente' },
  ];

  const filteredInvoices = invoices.filter(invoice => {
    const matchesStatus = filter === 'Todas' ? true : invoice.status === filter;
    return matchesStatus;
  });

  const handleDownloadInvoice = () => alert('Descargando factura...');
  const handleContinue = () => setScreen('invoices');
  const handleRetry = () => setScreen('invoices');
  const handleBack = () => setScreen('invoices');

  const handleViewInvoice = (id) => {
    setSelectedInvoiceId(id);
    setScreen('invoice-detail');
  };

  const handlePayInvoice = (invoice) => {
    // In a real app, you might pass the invoice amount/id to the payment screen
    setScreen('pay-invoice');
  }

  const handleRemoveCard = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarjeta?')) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  const handleNextInvoice = () => {
    const currentIndex = invoices.findIndex(inv => inv.id === selectedInvoiceId);
    if (currentIndex < invoices.length - 1) {
      setSelectedInvoiceId(invoices[currentIndex + 1].id);
    }
  };

  const handlePrevInvoice = () => {
    const currentIndex = invoices.findIndex(inv => inv.id === selectedInvoiceId);
    if (currentIndex > 0) {
      setSelectedInvoiceId(invoices[currentIndex - 1].id);
    }
  };

  // New navigation buttons component
  const Navigation = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 10, padding: 10, backgroundColor: '#e0e7ff', marginBottom: 15, flexWrap: 'wrap' }}>
      <button
        className={`nav-btn ${screen === 'invoices' ? 'active' : ''}`}
        onClick={() => setScreen('invoices')}
      >
        Facturas
      </button>
      <button
        className={`nav-btn ${screen === 'add-card' ? 'active' : ''}`}
        onClick={() => setScreen('add-card')}
      >
        Agregar Tarjeta
      </button>
      <button
        className={`nav-btn ${screen === 'pay-invoice' ? 'active' : ''}`}
        onClick={() => setScreen('pay-invoice')}
      >
        Pago Factura
      </button>
      <button
        className={`nav-btn ${screen === 'success' ? 'active' : ''}`}
        onClick={() => setScreen('success')}
      >
        Pago Exitoso
      </button>
      <button
        className={`nav-btn ${screen === 'error' ? 'active' : ''}`}
        onClick={() => setScreen('error')}
      >
        Error de Pago
      </button>
      <button
        className={`nav-btn ${screen === 'profile' ? 'active' : ''}`}
        onClick={() => setScreen('profile')}
      >
        Perfil (placeholder)
      </button>
      <button
        className={`nav-btn ${screen === 'settings' ? 'active' : ''}`}
        onClick={() => setScreen('settings')}
      >
        Configuración (placeholder)
      </button>
    </div>
  );

  // Placeholder components for additional screens
  const ProfileScreen = () => (
    <div className="wireframe-container" style={{ padding: 20, textAlign: 'center' }}>
      <h2>Perfil</h2>
      <p>Pantalla de perfil de usuario - contenido pendiente de implementación.</p>
      <button className="button cancel-button" onClick={() => setScreen('invoices')}>Volver a Facturas</button>
    </div>
  );

  const SettingsScreen = () => (
    <div className="wireframe-container" style={{ padding: 20, textAlign: 'center' }}>
      <h2>Configuración</h2>
      <p>Pantalla de configuración - contenido pendiente de implementación.</p>
      <button className="button cancel-button" onClick={() => setScreen('invoices')}>Volver a Facturas</button>
    </div>
  );

  return (
    <>
      <Navigation />
      {screen === 'invoices' && (
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', padding: 20, flexWrap: 'wrap' }}>
          <div className="wireframe-container">
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar">
              <button className="back-button" title="Volver" onClick={() => setScreen('profile')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="app-title">Facturas</span>
              <button
                onClick={() => setScreen('invoice-history')}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Historial
              </button>
            </div>
            <div className="home">
              <div className="filter-buttons">
                <button className={`filter-btn ${filter === 'Todas' ? 'active' : ''}`} onClick={() => setFilter('Todas')}>Todas</button>
                <button className={`filter-btn ${filter === 'Pendiente' ? 'active' : ''}`} onClick={() => setFilter('Pendiente')}>Pendientes</button>
                <button className={`filter-btn ${filter === 'Pagada' ? 'active' : ''}`} onClick={() => setFilter('Pagada')}>Pagadas</button>
              </div>

              <div className="card-container">
                {filteredInvoices.map(invoice => (
                  <InvoiceCard
                    key={invoice.id}
                    invoice={invoice}
                    onView={handleViewInvoice}
                    onPay={handlePayInvoice}
                    onDownload={handleDownloadInvoice}
                  />
                ))}
                {filteredInvoices.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
                      📄
                    </div>
                    <div style={{ fontWeight: '500' }}>No se encontraron facturas</div>
                    <div style={{ fontSize: '13px' }}>Intenta cambiar el filtro de estado.</div>
                  </div>
                )}
              </div>

              <div style={{ padding: '10px 15px 30px 15px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', marginBottom: '10px', paddingLeft: '5px' }}>GESTIÓN</div>
                <button
                  onClick={() => setScreen('wallet')}
                  style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '16px', marginBottom: '2px' }}>Mis Tarjetas</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Administrar medios de pago</div>
                  </div>
                  <div style={{ color: '#cbd5e1' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === 'wallet' && (
        <WalletScreen
          cards={cards}
          onAddCard={() => setScreen('add-card')}
          onRemoveCard={handleRemoveCard}
          onBack={() => setScreen('invoices')}
        />
      )}

      {screen === 'invoice-history' && (
        <InvoiceHistoryScreen
          invoices={invoices}
          onBack={handleBack}
          onView={handleViewInvoice}
          onPay={handlePayInvoice}
          onDownload={handleDownloadInvoice}
        />
      )}

      {screen === 'success' && (
        <SuccessScreen
          onDownloadInvoice={handleDownloadInvoice}
          onContinue={handleContinue}
          onBack={handleBack}
        />
      )}

      {screen === 'error' && (
        <ErrorScreen
          onRetry={handleRetry}
          onBack={handleBack}
        />
      )}

      {screen === 'add-card' && (
        <AddCardScreen
          onBack={handleBack}
        />
      )}

      {screen === 'pay-invoice' && (
        <PayInvoiceScreen
          onBack={handleBack}
          onConfirm={() => setScreen('success')}
        />
      )}

      {screen === 'invoice-detail' && (
        <InvoiceDetailScreen
          invoice={invoices.find(inv => inv.id === selectedInvoiceId)}
          onBack={handleBack}
          onNext={handleNextInvoice}
          onPrev={handlePrevInvoice}
          hasNext={invoices.findIndex(inv => inv.id === selectedInvoiceId) < invoices.length - 1}
          hasPrev={invoices.findIndex(inv => inv.id === selectedInvoiceId) > 0}
          onDownload={handleDownloadInvoice}
        />
      )}

      {screen === 'profile' && <ProfileScreen />}
      {screen === 'settings' && <SettingsScreen />}
    </>
  );
}

export default App;
