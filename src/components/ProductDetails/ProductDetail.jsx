import {useParams} from 'react-router-dom';


export const ProductDetail = (title)=>{
  
  const {id} = useParams()
  
  return(
    <h1>Informacion del Producto Número {id}</h1>
  )
}