import './ProductCardStyles.css'

export const ProductCard = ({title, price, image}) => {
  return (
    <div>
      <a href="#" className="productInfo">{title}</a>
      <img className="productImage" src={image} alt={`Imagen del producto ${title}`}/>
      <p>Price: {price}</p>
    </div>
  )
}
