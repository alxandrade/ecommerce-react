import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

// Importing toastify module
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from './components/NotFound';
import CartContainer from './containers/CartContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
      
    <CartProvider>
      <BrowserRouter>       
        <NavBar/>
        <ToastContainer></ToastContainer>
        <Container className="fluid my-5"> 
          <Routes>         
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:tipoMacetaId' element={<ItemListContainer/>} />
              <Route path='/detalles/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='*' element={<NotFound/>}/>
          </Routes>        
        </Container>
      </BrowserRouter>
    </CartProvider>    
  );
}

export default App;
