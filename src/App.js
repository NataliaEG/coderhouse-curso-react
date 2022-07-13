import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">

      <header className="App-header">

      <NavBar />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a la tienda de accesorios de AppCell.
        </p>
        
      </header>

    </div>
  );
}

export default App;
