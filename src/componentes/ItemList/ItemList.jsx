import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return (

    <div className='container mt-5'>
        <div className='row'>
        {productos.map(item =>(
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                <Item {...item}/>
                </div>
                ))}
        </div>
    </div>

    )
}

export default ItemList