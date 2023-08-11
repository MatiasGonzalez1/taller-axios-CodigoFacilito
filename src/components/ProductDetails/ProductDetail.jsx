import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard';


export const ProductDetail = (title)=>{
  
  const {id} = useParams()
  const [product, setProducts] = useState({})
  useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
        setProducts(result.data)
      })
    },[]
  )
  
  return(
    <div>
      <h1>Informacion del Producto Número {id}</h1>
    {product && 
    <ProductCard
    title={product.title}
    image={product.image}
    price={product.price}
    category={product.category}
    description={product.description}
    />}

    </div>

    )
}