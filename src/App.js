import './App.css';
import {ProductCard} from './components/ProductCard'

function App() {
  return (
    <div className="App">
     <h1>Lista de productos</h1>
    <ProductCard title={'Producto de Prueba'} price={'12'}/>
    </div>
  );
}

export default App;
