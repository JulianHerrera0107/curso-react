import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      'https://react-getting-started-d57b7-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then((data) => {
      //Necesitamos transformar la DATA
      const meetupsDB = [];
      for (const key in data) {
        const meetup = {
          id: key,
          //Spread Operator para copiar elementos y agregarlos a Key
          ...data[key]
        };
        meetupsDB.push(meetup);
      }

      setisLoading(false);
      setLoadedMeetups(meetupsDB);
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Cargando datos...</p>
      </section>
    )
  }
  return (
    <section>
      <h1>Todos los encuentros</h1>
      <MeetupList meetups={loadedMeetups} />

    </section>
  );
}
export default AllMeetupsPage;