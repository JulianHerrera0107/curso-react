import { useRef } from 'react';

import Card from '../user-interface/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionTextareaRef = useRef();

    function submitHandler(event) {
        event.preventDefault(); //Evitar el cargue de la página en Browser
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionTextareaRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        console.log(meetupData);
    }
    return (
        //Utilizamos el estilo de tarjeta from "Card.js"
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Titulo del Encuentro</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Imagén del Encuentro</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Dirección</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Descripción</label>
                    <textarea id='description' required rows='5' ref={descriptionTextareaRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Agregar Encuentro</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;