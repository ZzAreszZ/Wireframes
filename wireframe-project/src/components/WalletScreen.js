import React from 'react';

const WalletScreen = ({ cards, onAddCard, onRemoveCard, onBack }) => {
    return (
        <div className="wireframe-container" style={{ backgroundColor: '#f8fafc', minHeight: '100%' }}>
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 }}>
                <button className="back-button" title="Volver" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="app-title" style={{ color: '#0f172a' }}>Mis Tarjetas</span>
                <div style={{ width: 20 }}></div>
            </div>

            <div className="wallet-content" style={{ padding: '20px' }}>
                <div className="wallet-list">
                    {cards.map(card => (
                        <div key={card.id} className={`wallet-card-item ${card.type.toLowerCase()}`}>
                            <div className="wallet-card-info">
                                <div className="wallet-card-type">{card.type}</div>
                                <div className="wallet-card-number">•••• {card.number.slice(-4)}</div>
                                <div className="wallet-card-expiry">Vence: {card.expiry}</div>
                            </div>
                            <button
                                className="delete-card-btn"
                                onClick={() => onRemoveCard(card.id)}
                                title="Eliminar tarjeta"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <button className="add-card-btn-large" onClick={onAddCard}>
                    <div className="add-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <span>Agregar Nueva Tarjeta</span>
                </button>
            </div>
        </div>
    );
};

export default WalletScreen;
