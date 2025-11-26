import React from 'react';

const ErrorScreen = ({ onRetry, onBack }) => {
  return (
    <div className="wireframe-container">
      <div className="status-bar">
        9:41 <span>📶 100%</span>
      </div>
      <div className="app-bar">
        <button className="back-button" title="Volver" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="app-title">Error de Pago</span>
        <span className="client-info">Cliente: 111111/1</span>
      </div>
      <div className="content-container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 80px)' }}>

        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '100%', textAlign: 'center' }}>

          <div style={{ width: '80px', height: '80px', backgroundColor: '#fee2e2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <h2 style={{ color: '#dc2626', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>¡Pago Fallido!</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '25px' }}>
            No pudimos procesar su pago. Por favor, verifique sus datos e intente nuevamente.
          </p>

          <div style={{ backgroundColor: '#fff1f2', padding: '15px', borderRadius: '10px', marginBottom: '25px', textAlign: 'left', border: '1px solid #fecdd3' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
              <span style={{ fontSize: '18px' }}>⚠️</span>
              <span style={{ fontWeight: 'bold', color: '#9f1239', fontSize: '14px' }}>Error: Fondos insuficientes</span>
            </div>
            <p style={{ fontSize: '12px', color: '#be123c', margin: 0, paddingLeft: '28px' }}>
              Código de error: #ERR-402
            </p>
          </div>

          <button
            className="button view-button"
            style={{ width: '100%', marginBottom: '12px', fontSize: '16px', padding: '12px', borderRadius: '8px', backgroundColor: '#dc2626', borderColor: '#dc2626' }}
            onClick={onRetry}
          >
            Reintentar Pago
          </button>

          <button
            className="button cancel-button"
            style={{ width: '100%', fontSize: '16px', padding: '12px', borderRadius: '8px', color: '#4b5563', borderColor: '#d1d5db' }}
            onClick={onBack}
          >
            Cancelar
          </button>

        </div>

      </div>
    </div>
  );
};

export default ErrorScreen;
