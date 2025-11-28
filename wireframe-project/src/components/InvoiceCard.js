import React from 'react';

const InvoiceCard = ({ invoice, onView, onPay, onDownload }) => {
    return (
        <div className="invoice-card">
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
                <button className="button view-button" title="Ver detalle" onClick={() => onView(invoice.id)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="button pay-button" title="Pagar" onClick={() => onPay(invoice)}>
                    $
                </button>
                <button className="button download-button" title="Descargar" onClick={() => onDownload(invoice)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default InvoiceCard;
