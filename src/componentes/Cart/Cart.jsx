import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="container mt-4 text-center">
                <h2>No hay productos en el carrito.</h2>
                <Link to="/" className="btn btn-primary">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Productos en el Carrito</h2>
            <div className="row">
                {carrito.map(producto => (
                    <div className="col-md-4 mb-3" key={producto.item.id}>
                        <CartItem {...producto} />
                    </div>
                ))}
            </div>

            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button 
                onClick={() => vaciarCarrito()} 
                className="btn btn-secondary mr-2"
            >
                Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btn-primary">
                Finalizar Compra
            </Link>
        </div>
    );
};

export default Cart;