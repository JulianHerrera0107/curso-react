import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-d57b7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData), //Parametro en formato JSON
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Agregar un Nuevo Encuentro</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}
export default NewMeetupPage;