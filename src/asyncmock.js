const misProductos = [
    {id:"1", tipo: "proteina", marca: "ENA",stock: 15, nombre:"True made", presentacion: "1 kg", sabor: "Vainilla", precio:14900, img: "https://simplicityar.vtexassets.com/arquivos/ids/166779/143033_suplemento-dietario-whey-protein-sabor-vainilla-en-polvo-x-1000-g__imagen-1.jpg?v=638246950157400000"},
    {id:"2", tipo: "proteina", marca: "ENA",stock: 6, nombre:"True made", presentacion: "1 kg", sabor: "Frutilla", precio:14900, img: "https://www.enasport.com/cdn/shop/files/7792981062049_2_11756efc-c5e5-49a6-a2ac-422ee0b7f23d.jpg?v=1715602195"},
    {id:"3", tipo: "proteina", marca: "ENA", stock: 34, nombre:"True made", presentacion: "1 kg", sabor: "Chocolate", precio:14900, img: "https://simplicityar.vtexassets.com/arquivos/ids/169903-800-auto?v=638288421219270000&width=800&height=auto&aspect=true"},
    {id:"4", tipo: "creatina", marca: "STAR NUTRITION", stock: 25, nombre:"Crea Pure", presentacion: "300 gr", sabor: "Neutro", precio:21900, img: "https://acdn.mitiendanube.com/stores/123/325/products/33121-c1cba69cf82eee266916509785327651-640-0.jpg"},
    {id:"5", tipo: "Multivitaminico", marca: "PULVER", stock: 12, nombre:"Vitaminas", presentacion: "60 comp.", sabor: "Neutro", precio:8000, img: "https://www.pronatural.com.ar/images/productos/vitaminas-y-minerales.jpg"},
    {id:"6", tipo: "creatina", marca: "STAR NUTRITION",stock: 15,  nombre:"Crea Pure", presentacion: "150 gr", sabor: "Neutro", precio:13900, img: "https://workupsuplementos.com/web/image/product.template/17629/image_1024?unique=eec8c20"}
]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve (misProductos)
        }, 300)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.tipo === idCategoria)
            resolve(producto)
        }, 100);

    })

}