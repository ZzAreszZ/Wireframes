import React, { useState, useMemo } from 'react';

const InvoiceHistoryScreen = ({ invoices, onBack, onView }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Todas');

    const filteredInvoices = useMemo(() => {
        return invoices.filter(invoice => {
            const matchesSearch = invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                invoice.amount.includes(searchTerm);
            const matchesStatus = statusFilter === 'Todas' ? true : invoice.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [invoices, searchTerm, statusFilter]);

    // Calculate totals
    const totals = useMemo(() => {
        let pending = 0;
        let paid = 0;
        invoices.forEach(inv => {
            const amount = parseFloat(inv.amount.replace('$', ''));
            if (inv.status === 'Pendiente') pending += amount;
            if (inv.status === 'Pagada') paid += amount;
        });
        return { pending, paid };
    }, [invoices]);

    // Group by Year (extracting from "Periodo: MM/YYYY")
    const groupedInvoices = useMemo(() => {
        const groups = {};
        filteredInvoices.forEach(invoice => {
            // Try to extract year from title "Periodo: MM/YYYY"
            const parts = invoice.title.split('/');
            const year = parts.length > 1 ? parts[1] : 'General';

            if (!groups[year]) groups[year] = [];
            groups[year].push(invoice);
        });
        return groups;
    }, [filteredInvoices]);

    return (
        <div className="wireframe-container" style={{ backgroundColor: '#f8fafc', minHeight: '100%' }}>
            <div className="status-bar">9:41 <span>📶 100%</span></div>
            <div className="app-bar" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 }}>
                <button className="back-button" title="Volver" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="app-title" style={{ color: '#0f172a' }}>Historial</span>
                <div style={{ width: 20 }}></div>
            </div>

            <div className="history-content" style={{ padding: '20px', paddingBottom: '80px' }}>

                {/* Summary Cards */}
                <div className="history-summary-grid">
                    <div className="summary-card pending">
                        <div className="summary-label">Pendiente</div>
                        <div className="summary-value">${totals.pending.toFixed(2)}</div>
                    </div>
                    <div className="summary-card paid">
                        <div className="summary-label">Pagado</div>
                        <div className="summary-value">${totals.paid.toFixed(2)}</div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="search-bar-container">
                    <div className="search-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar por periodo, monto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="history-search-input"
                    />
                </div>

                {/* Filter Chips */}
                <div className="filter-chips">
                    {['Todas', 'Pendiente', 'Pagada'].map(status => (
                        <button
                            key={status}
                            className={`filter-chip ${statusFilter === status ? 'active' : ''}`}
                            onClick={() => setStatusFilter(status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {/* Grouped List */}
                <div className="history-list">
                    {Object.keys(groupedInvoices).sort((a, b) => b.localeCompare(a)).map(year => (
                        <div key={year} className="history-group">
                            <div className="sticky-header-container">
                                <h3 className="group-title sticky-header">{year}</h3>
                            </div>
                            {groupedInvoices[year].map((invoice, index) => (
                                <div
                                    key={invoice.id}
                                    className="history-item"
                                    onClick={() => onView(invoice.id)}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="history-item-left">
                                        <div className={`history-item-icon-bg ${invoice.status.toLowerCase()}`}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                        </div>
                                        <div className="history-item-details">
                                            <div className="history-item-title">{invoice.title}</div>
                                            <div className="history-item-date">Vence: {invoice.dueDate}</div>
                                        </div>
                                    </div>
                                    <div className="history-item-right">
                                        <div className="history-item-amount">{invoice.amount}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <div className={`history-item-status-dot ${invoice.status.toLowerCase()}`}></div>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {filteredInvoices.length === 0 && (
                        <div className="empty-state">
                            <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
                            <p>No se encontraron facturas.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InvoiceHistoryScreen;
