import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Cantidad: {cantidad}</p>
                <p className="card-text">Precio: ${item.precio.toFixed(2)}</p>
                <button 
                    onClick={() => eliminarProducto(item.id)} 
                    className="btn btn-danger"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;