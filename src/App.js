import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const App =() => {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la Tienda!"/>
    </>
  )
}

export default App;
