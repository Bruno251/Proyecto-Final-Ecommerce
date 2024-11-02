import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import CartDetails from './CartDetails'
import { FiTrash2 } from 'react-icons/fi'
import './Cart.css'

const Cart = () => {
  const {cart, clearCart, total, itemAmount} = useContext(ShopContext);
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h1>Carro de Compras</h1>
            <h1>{itemAmount} Articulos </h1>
            <FiTrash2 onClick={clearCart} className='delete_cart' />
          </div>
          <div className="cart_detail">
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id} />
              ))
            ) : (
              <p>Tu Carro esta vacío</p>
            )}
          </div>
        </div>
        <div className="cart_right">
          <h2>Resumen del Carrito</h2>
          <div className="summary_item">
            <span>Articulos</span>
            <span>{itemAmount} </span>
          </div>
          <div className="cart_summary">
            <div className="summary_item">
              <span>Envio</span>
              <span>Gratis</span>
            </div>
            <div className="summary_item total_cost">
              <span>Costo Total</span>
              <span>$ {isNaN(total) ? 0 : total} </span>
            </div>
            <button className="checkout_btn">Verificar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart