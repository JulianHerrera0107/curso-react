import Card from '../user-interface/Card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm() {
    return (
        //Utilizamos el estilo de tarjeta from "Card.js"
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Titulo del Encuentro</label>
                    <input type='text' required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Imagén del Encuentro</label>
                    <input type='url' required id='image' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Dirección</label>
                    <input type='text' required id='address' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Descripción</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Agregar Encuentro</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;