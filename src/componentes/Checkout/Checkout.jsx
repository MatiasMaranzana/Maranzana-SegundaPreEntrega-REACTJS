import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden, complete correctamente");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        setNombre("");
                        setApellido("");
                        setTelefono("");
                        setEmail("");
                        setEmailConfirmacion("");
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden!");
                    });
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se puede actualizar el stock");
            });
    };

    return (
        <div className="container mt-4">
            <h2>Checkout</h2>

            <div className="row mb-4">
                {carrito.map(producto => (
                    <div className="col-md-4 mb-3" key={producto.item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{producto.item.nombre}</h5>
                                <p className="card-text">Precio: ${producto.item.precio.toFixed(2)}</p>
                                <p className="card-text">Cantidad: {producto.cantidad}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Total: ${total.toFixed(2)}</h3>

            <form onSubmit={manejadorFormulario} className="mt-4">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" className="form-control" id="telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailConfirmacion">Confirmar Email</label>
                    <input type="email" className="form-control" id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} required />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Confirmar Compra</button>
                {ordenId && (
                    <strong className="d-block mt-3">¡Gracias por tu compra! Tu número de orden es: {ordenId}</strong>
                )}
            </form>
        </div>
    );
};

export default Checkout;