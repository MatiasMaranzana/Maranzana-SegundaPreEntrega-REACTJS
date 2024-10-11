import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { toast } from 'react-toastify';
import Contador from '../Contador/Contador';
import "./ItemDetail.css" 

const ItemDetail = ({ id, idCat, marca, stock, nombre, presentacion, sabor, precio, img }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarAlCarrito } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
        toast.success("Su compra fue enviada al carrito", { autoClose: 1000, theme: "dark", position: "top-right" });
    };

    return (
        <div className="card mb-3" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <img src={img} className="card-img-left" alt={nombre} style={{ width: '30%', objectFit: 'cover' }} />
            <div className="card-body" style={{ width: '70%' }}>
                <h5 className="card-title" style={{ fontSize: '3.5rem', lineHeight: '1.5' }}>{nombre}</h5>
                <p className="card-text" style={{ fontSize: '1.5rem', lineHeight: '1.5' }}>
                    <strong>Tipo:</strong> {idCat}<br />
                    <strong>Marca:</strong> {marca}<br />
                    <strong>Presentación:</strong> {presentacion}<br />
                    <strong>Sabor:</strong> {sabor}<br />
                    <strong>Precio:</strong> ${precio}<br />
                    <strong>Stock:</strong> {stock}<br />
                    <small>ID: {id}</small>
                </p>
                <div className="d-flex align-items-center">
                    {
                        agregarCantidad > 0 ? (
                            <Link to="/cart" className="btn btn-success">Terminar Compra</Link>
                        ) : (
                            <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;