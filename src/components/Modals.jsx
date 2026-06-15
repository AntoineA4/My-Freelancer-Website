function Modals({ isOpen, onClose, children }) {
    return (
        <>
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}
        ></div>
        <div className={`modal-content ${isOpen ? 'open' : ''}`}>
            {children}
        </div>
        </>
    )
}

export default Modals