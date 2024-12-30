function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>¿Estás seguro?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancelar</button>
            <button className="btn" onClick={confirmHandler}>Confirmar</button>
        </div>

    );
}

export default Modal;