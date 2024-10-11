import { useState } from "react";

const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-secondary me-2" onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button className="btn btn-secondary ms-2" onClick={sumarContador}> + </button>
            <button 
                className="btn btn-dark ms-3" 
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }} 
                onClick={() => funcionAgregar(contador)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default Contador;