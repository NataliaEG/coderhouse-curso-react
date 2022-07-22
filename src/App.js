import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados', quantity)
  }

  return (
    <div className="App"> 
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a la tienda de accesorios de AppCell" />
        <ItemCount stock ={10} initial={1} onAdd={handleOnAdd} /> 
    </div>
  );
}

export default App;
