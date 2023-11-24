const ProductItem =(props)=>{
    return (
 <div>
    <img src= {props.image} alt={props.title} />
    <h2>
        {props.title}
    </h2>
    <h3>
        {props.price}
    </h3>
 </div>
    )
}

export default ProductItem