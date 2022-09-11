import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>      
      <ToastContainer></ToastContainer>
      <Container className="fluid my-5">
        {/* <ItemListContainer/> */}
        <ItemDetailContainer />
      </Container>
    </div>
  );
}

export default App;
