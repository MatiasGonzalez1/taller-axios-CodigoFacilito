import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {ProductCard} from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((result)=>{
      setProducts(result.data)
    })
  }, [])

  return (
    <div className="App">
     <h1>Lista de productos</h1>
     {products && products.map((product)=>{
      return(
        <ProductCard title={product.title} price={product.price}/>
      )
     })}
    </div>
  );
}

export default App;
