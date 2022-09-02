import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 
  
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>      
      <ToastContainer></ToastContainer>
      <ItemListContainer 
        greeting = {"Bienvenido a la Tienda en Línea"}
      />
    </div>
  );
}

export default App;
