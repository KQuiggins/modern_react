const Modal = ({ isOpen, onClose, rating }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Thank you for your feedback!</h3>
                <p>You rated us {rating} star{rating > 1 ? "s" : ''}</p>
                <button className='close-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;