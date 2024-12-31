import classes from './Card.module.css';

function Card(props) { //Primer componente personalizado para envolver contenido JSX
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default Card;