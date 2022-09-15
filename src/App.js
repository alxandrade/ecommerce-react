import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>       
      <header> <NavBar/> </header>      
      <ToastContainer></ToastContainer>
      <Container className="fluid my-5"> 
        <Routes>         
            <Route path="/" element={<ItemListContainer/>}> 
              <Route path=":tipoMacetaId" element={<ItemListContainer/>}/>                           
            </Route>                                
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Routes>
          <Route path=":productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
