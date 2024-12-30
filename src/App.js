import ListaPendientes from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Lista de Pendientes</h1>
      <ListaPendientes text='Aprender React'/>
      <ListaPendientes text='Finalizar curso de React'/>
    </div>
  );
}


export default App;
