import React from 'react';

const PayInvoiceScreen = ({ onBack, onConfirm }) => {
    return (
        <div className="wireframe-container">
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar">
                <button className="back-button" title="Volver" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="app-title">Pago de Factura</span>
                <span className="client-info">Cliente: 111111/1</span>
            </div>

            <div className="content-container" style={{ padding: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: '#1e40af', marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Confirmar Pago</h3>

                    <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#666' }}>Factura:</span>
                            <span style={{ fontWeight: 'bold', color: '#1e40af' }}>123456789</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#666' }}>Periodo:</span>
                            <span style={{ fontWeight: 'bold', color: '#1e40af' }}>08/2025</span>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>Seleccionar Tarjeta:</label>
                        <select style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: 'white' }}>
                            <option>Visa ****1234</option>
                            <option>Mastercard ****5678</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>Cuotas:</label>
                        <select style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: 'white' }}>
                            <option>1 cuota</option>
                            <option>3 cuotas</option>
                            <option>6 cuotas</option>
                        </select>
                    </div>

                    <div style={{ border: '1px solid #3b82f6', borderRadius: '8px', padding: '15px', marginBottom: '20px', backgroundColor: '#eff6ff' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <span style={{ color: '#333' }}>Importe:</span>
                            <span>$150.00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <span style={{ color: '#333' }}>Recargo Fin:</span>
                            <span>$5.00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', borderTop: '1px solid #bfdbfe', paddingTop: '10px', fontWeight: 'bold', color: '#1e40af' }}>
                            <span>Total:</span>
                            <span>$155.00</span>
                        </div>
                    </div>

                    <button className="button pay-button" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '12px' }} onClick={onConfirm}>Confirmar Pago</button>

                    <div style={{ marginTop: '15px', fontSize: '10px', color: '#999', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <span>🔒</span> Pago seguro con encriptación SSL. Todos los datos están protegidos.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PayInvoiceScreen;
