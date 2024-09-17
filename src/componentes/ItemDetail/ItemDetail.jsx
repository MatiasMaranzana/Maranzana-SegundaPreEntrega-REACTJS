import React from 'react'
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, tipo, marca,stock, nombre, presentacion, sabor, precio, img}) => {

const [agregarCantidad, setAgregarCantidad] = useState(0)



const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
}

    return (
        <div className="card" style={{ width: '20rem' }}>
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
        </div>
        {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
}

    </div>
    )
}

export default ItemDetail