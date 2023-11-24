import ProductItem from "./ProductItem"
import { v4 as uuidv4 } from 'uuid';
const ProductList =(props)=>{
    return (
    <article>
{props.productsArr.map((product)=><ProductItem
key={uuidv4()}
image = {product.image}
title = {product.title}
price = {product.price}
/>)}
    </article>
    )
}
export default ProductList