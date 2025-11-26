import React from 'react';

const SuccessScreen = ({ onDownloadInvoice, onContinue, onBack }) => {
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
        <span className="app-title">Pago Exitoso</span>
        <span className="client-info">Cliente: 111111/1</span>
      </div>
      <div className="content-container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 80px)' }}>

        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '100%', textAlign: 'center' }}>

          <div style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h2 style={{ color: '#16a34a', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>¡Pago Exitoso!</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '25px' }}>
            Su transacción ha sido procesada correctamente.
          </p>

          <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '25px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#64748b' }}>Monto pagado:</span>
              <span style={{ fontWeight: 'bold', color: '#1e293b' }}>$155.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#64748b' }}>Fecha:</span>
              <span style={{ fontWeight: 'bold', color: '#1e293b' }}>25/11/2025</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: '#64748b' }}>ID Transacción:</span>
              <span style={{ fontWeight: 'bold', color: '#1e293b' }}>#TRX-98765</span>
            </div>
          </div>

          <button
            className="button view-button"
            style={{ width: '100%', marginBottom: '12px', fontSize: '16px', padding: '12px', borderRadius: '8px' }}
            onClick={onDownloadInvoice}
          >
            Descargar Comprobante
          </button>

          <button
            className="button cancel-button"
            style={{ width: '100%', fontSize: '16px', padding: '12px', borderRadius: '8px', color: '#4b5563', borderColor: '#d1d5db' }}
            onClick={onContinue}
          >
            Volver al Inicio
          </button>

        </div>

      </div>
    </div>
  );
};

export default SuccessScreen;
