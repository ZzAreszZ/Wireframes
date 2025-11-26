import React from 'react';

const AddCardScreen = ({ onBack }) => {
  return (
    <div className="wireframe-container">
      <div className="status-bar">9:41 <span>📶 100%</span></div>
      <div className="app-bar">
        <button className="back-button" title="Volver" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="app-title">Agregar Tarjeta</span>
        <span className="client-info">Cliente: 111111/1</span>
      </div>

      <div className="content-container" style={{ padding: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1e40af', marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Nueva Tarjeta de Crédito</h3>
          
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
             <span style={{ fontSize: '14px', color: '#666' }}>💳 Tarjetas aceptadas</span>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>Nombre en la Tarjeta:</label>
            <input type="text" placeholder="Ej: Juan Pérez" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>Número de Tarjeta:</label>
            <input type="text" placeholder="1234 5678 9012 3456" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>DNI del Titular:</label>
            <input type="text" placeholder="12345678" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="form-group" style={{ flex: 1, marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>Fecha de Expiración:</label>
              <input type="text" placeholder="MM/AA" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
            <div className="form-group" style={{ flex: 1, marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>CVV ❓</label>
              <input type="text" placeholder="123" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="button pay-button" style={{ flex: 1, justifyContent: 'center' }}>Guardar</button>
            <button className="button cancel-button" style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', color: '#666', border: '1px solid #ddd' }} onClick={onBack}>Cancelar</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddCardScreen;
