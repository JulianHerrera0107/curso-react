import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'Este es nuestro primer encuentro',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'Este es nuestro segundo encuentro',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cabo_San_Juan%2C_Colombia.jpg/273px-Cabo_San_Juan%2C_Colombia.jpg',
      address: 'Cabo San Juan en el Parque Tayrona en Santa Marta.',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage(){
    return(
        <section>
            <h1>Todos los encuentros</h1>
            <MeetupList meetups={DUMMY_DATA} />

        </section>
    );
}
export default AllMeetupsPage;