import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Item = ({ id, tipo, marca, nombre, presentacion, sabor, precio, img }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                    Tipo: {tipo}<br />
                    Marca: {marca}<br />
                    Presentación: {presentacion}<br />
                    Sabor: {sabor}<br />
                    Precio: ${precio}
                    <p>ID: {id} </p>
                </p>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalles</Link>
            </div>
        </div>
    );
};

export default Item;