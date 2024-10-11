import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)


  return (
    <div>
      <Link to="/cart">
        <img className= "imgCarrito" src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png" alt="carrito" />
      </Link>
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }
    </div>
  )
}

export default CartWidget