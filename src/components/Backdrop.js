function Backdrop(props){ //Backdrop significa telón de foro
    return(
        <div className="backdrop" onClick={props.onCancel}/>
        //Permite cerrar el componente haciendo clic en la pantalla
    );
}
export default Backdrop;