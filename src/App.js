import './App.css'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'


function App() {

  

  return (
    <div className="App"> 
    <CartContextProvider>
        <BrowserRouter>
              <NavBar /> 
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Todos los productos" />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtrando categorias" />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<h1>CART</h1>} />
              </Routes>
        </BrowserRouter>
      </CartContextProvider>
     </div>
  );
}

export default App;
