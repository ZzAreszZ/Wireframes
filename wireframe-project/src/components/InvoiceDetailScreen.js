import React from 'react';

const InvoiceDetailScreen = ({ invoice, onBack, onNext, onPrev, hasNext, hasPrev, onDownload }) => {
    if (!invoice) return null;

    return (
        <div className="wireframe-container">
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar">
                <button className="back-button" title="Volver" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="app-title">Detalle de Factura</span>
                <span className="client-info">Cliente: 111111/1</span>
            </div>

            <div className="content-container" style={{ padding: '20px', height: 'calc(100% - 80px)', overflowY: 'auto' }}>

                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>

                    {/* Invoice Image Placeholder */}
                    <div style={{ width: '100%', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '2px dashed #cbd5e1' }}>
                        <span style={{ color: '#64748b', fontWeight: '500' }}>Imagen de Factura</span>
                    </div>

                    <h2 style={{ color: '#1e40af', fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>{invoice.title}</h2>
                    <div style={{ marginBottom: '15px' }}>
                        <span className={`status ${invoice.status.toLowerCase()}`} style={{ fontSize: '14px' }}>{invoice.status}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>Emisión</span>
                            <span style={{ fontWeight: '600', color: '#334155' }}>{invoice.issueDate}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>Vencimiento</span>
                            <span style={{ fontWeight: '600', color: '#334155' }}>{invoice.dueDate}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>Monto</span>
                            <span style={{ fontWeight: '600', color: '#1e40af', fontSize: '18px' }}>{invoice.amount}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                style={{
                                    background: 'none',
                                    border: '1px solid #3b82f6',
                                    borderRadius: '8px',
                                    color: '#3b82f6',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    padding: '6px 10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontWeight: '600',
                                    height: 'fit-content'
                                }}
                                onClick={onDownload}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Descargar
                            </button>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                        <button
                            onClick={onPrev}
                            disabled={!hasPrev}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: hasPrev ? 'pointer' : 'not-allowed',
                                opacity: hasPrev ? 1 : 0.3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: '#3b82f6',
                                fontWeight: '600'
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Anterior
                        </button>

                        <span style={{ fontSize: '14px', color: '#94a3b8' }}>Navegación</span>

                        <button
                            onClick={onNext}
                            disabled={!hasNext}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: hasNext ? 'pointer' : 'not-allowed',
                                opacity: hasNext ? 1 : 0.3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: '#3b82f6',
                                fontWeight: '600'
                            }}
                        >
                            Siguiente
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InvoiceDetailScreen;
