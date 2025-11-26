import React, { useState } from 'react';
import './App.css';

import SuccessScreen from './components/SuccessScreen';
import ErrorScreen from './components/ErrorScreen';
import AddCardScreen from './components/AddCardScreen';
import PayInvoiceScreen from './components/PayInvoiceScreen';
import InvoiceDetailScreen from './components/InvoiceDetailScreen';

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

  const invoices = [
    { id: 1, title: 'Periodo: 08/2025', amount: '$150.00', issueDate: '2023-10-01', dueDate: '2023-10-15', status: 'Pendiente' },
    { id: 2, title: 'Periodo: 09/2025', amount: '$50.00', issueDate: '2023-10-05', dueDate: '2023-10-20', status: 'Pagada' },
    { id: 3, title: 'Periodo: 10/2025', amount: '$80.00', issueDate: '2023-10-10', dueDate: '2023-10-25', status: 'Pendiente' },
  ];

  const [periodFilter, setPeriodFilter] = useState('');

  const filteredInvoices = invoices.filter(invoice => {
    const matchesStatus = filter === 'Todas' ? true : invoice.status === filter;
    const matchesPeriod = periodFilter === '' ? true : invoice.title.toLowerCase().includes(periodFilter.toLowerCase());
    return matchesStatus && matchesPeriod;
  });

  const handleDownloadInvoice = () => alert('Descargando factura...');
  const handleContinue = () => setScreen('invoices');
  const handleRetry = () => setScreen('invoices');
  const handleBack = () => setScreen('invoices');

  const handleViewInvoice = (id) => {
    setSelectedInvoiceId(id);
    setScreen('invoice-detail');
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

          {/* Pantalla de Facturas */}
          <div className="wireframe-container">
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar">
              <button className="back-button" title="Volver" onClick={() => setScreen('profile')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="app-title">Facturas</span>
              <span className="client-info">Cliente: 111111/1</span>
            </div>
            <div className="home">
              <div className="filter-buttons">
                <button className={`filter-btn ${filter === 'Todas' ? 'active' : ''}`} onClick={() => setFilter('Todas')}>Todas</button>
                <button className={`filter-btn ${filter === 'Pendiente' ? 'active' : ''}`} onClick={() => setFilter('Pendiente')}>Pendientes</button>
                <button className={`filter-btn ${filter === 'Pagada' ? 'active' : ''}`} onClick={() => setFilter('Pagada')}>Pagadas</button>
              </div>

              <div style={{ padding: '0 15px 15px 15px' }}>
                <input
                  type="text"
                  placeholder="Buscar por periodo (ej: 08/2025)"
                  value={periodFilter}
                  onChange={(e) => setPeriodFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div className="card-container">
                {filteredInvoices.map(invoice => (
                  <div key={invoice.id} className="invoice-card">
                    <div className="card-header">
                      <h3 className="card-title">{invoice.title}</h3>
                      <span className={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</span>
                    </div>
                    <div className="card-body">
                      <div className="amount">{invoice.amount}</div>
                      <div className="dates">
                        <div className="date-item">Emisión: {invoice.issueDate}</div>
                        <div className="date-item">Vencimiento: {invoice.dueDate}</div>
                      </div>
                    </div>
                    <div className="card-buttons">
                      <button className="button view-button" title="Ver detalle" onClick={() => handleViewInvoice(invoice.id)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button className="button pay-button" title="Pagar" onClick={() => setScreen('pay-invoice')}>$</button>
                      <button className="button download-button" title="Descargar" onClick={handleDownloadInvoice}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                {filteredInvoices.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>
                    No se encontraron facturas para el periodo seleccionado.
                  </div>
                )}
              </div>

              <div className="payment-methods-section">
                <h3 style={{ fontSize: 18, fontWeight: 'bold', color: '#1e40af', marginBottom: 15 }}>Métodos de Pago</h3>

                <div className="payment-carousel">
                  {/* Mock Card 1 */}
                  <div className="payment-method-card visa">
                    <div className="card-top">
                      <span className="card-logo">VISA</span>
                      <span style={{ fontSize: 20 }}>💳</span>
                    </div>
                    <div className="card-number">**** **** **** 1234</div>
                    <div className="card-bottom">
                      <div className="card-holder">JUAN PEREZ</div>
                      <div className="card-expiry">12/28</div>
                    </div>
                  </div>

                  {/* Mock Card 2 */}
                  <div className="payment-method-card mastercard">
                    <div className="card-top">
                      <span className="card-logo">Mastercard</span>
                      <span style={{ fontSize: 20 }}>💳</span>
                    </div>
                    <div className="card-number">**** **** **** 5678</div>
                    <div className="card-bottom">
                      <div className="card-holder">JUAN PEREZ</div>
                      <div className="card-expiry">09/26</div>
                    </div>
                  </div>

                  {/* Add Card Placeholder */}
                  <div className="add-card-placeholder" onClick={() => setScreen('add-card')}>
                    <div className="add-card-icon">+</div>
                    <div className="add-card-text">Agregar un medio de pago</div>
                    <div className="add-card-subtext">Cuenta bancaria, digital o tarjeta de crédito.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
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
        />
      )}

      {screen === 'profile' && <ProfileScreen />}
      {screen === 'settings' && <SettingsScreen />}
    </>
  );
}

export default App;
