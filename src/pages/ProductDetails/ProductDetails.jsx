import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {productsData} from '../../data'
import {ShopContext} from '../../components/ShopContext/ShopContext'
import './ProductDetails.css'

const ProductDetails = () => {

    const {addToCart} = useContext(ShopContext);

    const {id} = useParams()

    const product = productsData.find(product=> {
        return product.id === parseInt(id);
    })

  return (
    <div>
        <div className="product_details">
            <div className="detail_left">
                <img src={product.image} alt="" />
            </div>
            <div className="detail_right">
                <h3>{product.title} </h3>
                <p className="product_price">$ {product.price} </p>
                <p className="desc">{product.description} </p>
                <button onClick={()=> addToCart(product, id)}>Agregar al Carro</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails