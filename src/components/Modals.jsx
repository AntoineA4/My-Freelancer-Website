function Modals({ isOpen, onClose, children, position = 'right' }) {
    return (
        <>
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}
        ></div>
        <div className={`modal-content modal-${position} ${isOpen ? 'open' : ''}`}>
            {children}
        </div>
        </>
    )
}

export default Modals