import React, { useState } from 'react';
import './App.css';

function App() {
  const [filter, setFilter] = useState('Todas');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [dni, setDni] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const invoices = [
    { id: 1, title: 'Periodo: 08/2025', amount: '$150.00', issueDate: '2023-10-01', dueDate: '2023-10-15', status: 'Pendiente' },
    { id: 2, title: 'Periodo: 09/2025', amount: '$50.00', issueDate: '2023-10-05', dueDate: '2023-10-20', status: 'Pagada' },
    { id: 3, title: 'Periodo: 10/2025', amount: '$80.00', issueDate: '2023-10-10', dueDate: '2023-10-25', status: 'Pendiente' },
  ];

  const filteredInvoices = filter === 'Todas' ? invoices : invoices.filter(invoice => invoice.status === filter);

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {/* Pantalla de Facturas */}
      <div className="wireframe-container">
        <div className="status-bar">
          9:41 <span>📶 100%</span>
        </div>
        <div className="app-bar">
          <button className="back-button" title="Volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <div className="card-container">
            {filteredInvoices.map(invoice => (
              <div key={invoice.id} className="invoice-card">
                <div className="card-header">
                  <h3 className="card-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14,2 14,8 20,8" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="10,9 9,9 8,9" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {invoice.title}
                  </h3>
                  <span className={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</span>
                </div>
                <div className="card-body">
                  <div className="amount">{invoice.amount}</div>
                  <div className="dates">
                    <div className="date-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Emisión: {invoice.issueDate}</span>
                    </div>
                    <div className="date-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Vencimiento: {invoice.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="card-buttons">
                  <button className="button view-button" title="Ver detalle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="button pay-button" title="Pagar">
                    $
                  </button>
                  <button className="button download-button" title="Descargar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-section">
            <div className="summary-item">
              <span>Total Pendiente:</span>
              <span className="summary-amount">${filteredInvoices.filter(inv => inv.status === 'Pendiente').reduce((sum, inv) => sum + parseFloat(inv.amount.replace('$', '')), 0).toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Número de Pendientes:</span>
              <span className="summary-amount">{filteredInvoices.filter(inv => inv.status === 'Pendiente').length}</span>
            </div>
            <div className="summary-item">
              <span>Próxima Vencimiento:</span>
              <span className="summary-amount">{filteredInvoices.filter(inv => inv.status === 'Pendiente').sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0]?.dueDate || 'N/A'}</span>
            </div>
          </div>
          <div className="payment-methods-section">
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px' }}>Métodos de Pago</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <span>Visa ****1234</span>
                <span style={{ color: '#6b7280', fontSize: '12px' }}>Predeterminado</span>
              </div>
            </div>
            <button className="button view-button" style={{ width: '100%', marginTop: '15px', fontSize: '16px', padding: '12px' }} title="Agregar Tarjeta">
              Agregar Tarjeta
            </button>
          </div>
        </div>
      </div>

      {/* Pantalla de Agregar Tarjeta */}
      <div className="wireframe-container">
        <div className="status-bar">
          9:41 <span>📶 100%</span>
        </div>
        <div className="app-bar">
          <button className="back-button" title="Volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="app-title">Agregar Tarjeta</span>
          <span className="client-info">Cliente: 111111/1</span>
        </div>
        <div className="home">
          <div className="payment-card">
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e40af', marginBottom: '20px' }}>Nueva Tarjeta de Crédito</h3>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img src="https://via.placeholder.com/300x100?text=Tarjetas+Aceptadas" alt="Tarjetas aceptadas" style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
            </div>
            <div className="payment-form">
              <div className="form-group">
                <label>Nombre en la Tarjeta:</label>
                <input
                  type="text"
                  className="form-input"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div className="form-group">
                <label>Número de Tarjeta:</label>
                <input
                  type="text"
                  className="form-input"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="form-group">
                <label>DNI del Titular:</label>
                <input
                  type="text"
                  className="form-input"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  placeholder="12345678"
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Fecha de Expiración:</label>
                  <input
                    type="text"
                    className="form-input"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/AA"
                  />
                </div>
                <div className="form-group" style={{ flex: 1, position: 'relative' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    CVV
                    <button className="cvv-help-button" title="El CVV es el código de seguridad de 3 dígitos en el reverso de tu tarjeta">?</button>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', gap: '16px' }}>
              <button className="button view-button" title="Guardar" style={{ flex: 1, padding: '12px 24px', fontSize: '16px', fontWeight: '600', borderRadius: '12px' }}>
                Guardar
              </button>
              <button className="cancel-button" title="Cancelar" style={{ flex: 1 }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pantalla de Pago */}
      <div className="wireframe-container">
        <div className="status-bar">
          9:41 <span>📶 100%</span>
        </div>
        <div className="app-bar">
          <button className="back-button" title="Volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="app-title">Pago de Factura</span>
          <span className="client-info">Cliente: 111111/1</span>
        </div>
        <div className="home">
          <div className="payment-card">
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px', textAlign: 'center' }}>Confirmar Pago</h3>
            <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: '600', color: '#374151' }}>Factura:</span>
                <span style={{ color: '#1e40af', fontWeight: 'bold' }}>123456789</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '600', color: '#374151' }}>Periodo:</span>
                <span style={{ color: '#1e40af', fontWeight: 'bold' }}>08/2025</span>
              </div>
            </div>
            <div className="payment-form">
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Seleccionar Tarjeta:</label>
                <select className="form-select" style={{ backgroundColor: '#ffffff', border: '2px solid #e5e7eb', borderRadius: '8px', padding: '10px', fontSize: '16px' }}>
                  <option>Visa ****1234</option>
                  <option>Mastercard ****5678</option>
                  <option>American Express ****9012</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Cuotas:</label>
                <select className="form-select" style={{ backgroundColor: '#ffffff', border: '2px solid #e5e7eb', borderRadius: '8px', padding: '10px', fontSize: '16px' }}>
                  <option>1 cuota</option>
                  <option>3 cuotas</option>
                  <option>6 cuotas</option>
                  <option>12 cuotas</option>
                </select>
              </div>
            </div>
            <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '10px', marginTop: '20px', border: '1px solid #3b82f6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#374151' }}>Importe:</span>
                <span style={{ color: '#374151', fontWeight: '600' }}>$150.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#374151' }}>Recargo Fin:</span>
                <span style={{ color: '#374151', fontWeight: '600' }}>$5.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', color: '#1e40af' }}>
                <span>Total:</span>
                <span>$155.00</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
              <button className="button view-button" title="Pagar" style={{ width: '100%', padding: '15px', fontSize: '18px', fontWeight: 'bold', borderRadius: '12px' }}>
                Confirmar Pago
              </button>
            </div>
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '15px', textAlign: 'center' }}>
              🔒 Pago seguro con encriptación SSL. Todos los datos están protegidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
