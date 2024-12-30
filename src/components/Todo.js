import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ListaPendientes(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() { //Función para eliminar el mensaje por botones
        setModalIsOpen(true);
    }

    function closeModalHandler() { //Función para cerrar el componente Modal
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn">Crear</button>
                <button className="btn" onClick={deleteHandler}>Eliminar</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
}

export default ListaPendientes;