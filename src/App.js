import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>      

      <ItemListContainer 
        greeting = {"Bienvenido a la Tienda en Línea"}
      />
    </div>
  );
}

export default App;
