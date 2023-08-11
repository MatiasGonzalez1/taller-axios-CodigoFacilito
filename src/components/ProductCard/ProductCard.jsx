import './ProductCardStyles.css'
import { Link } from 'react-router-dom'

export const ProductCard = ({id, title, price, image, description, category}) => {
  return (
    <div>
      <h2 className='productInfo'>
        <Link to={`/product/${id}`}>
        {title}
        </Link>
      </h2>
      <img className="productImage" src={image} alt={`Imagen del producto ${title}`}/>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      {description && <p>Description: {description}</p>}
    </div>
  )
}
