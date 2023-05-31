import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css"

const ProductDetails = (props) => {
    const params = useParams()

    // console.log(params.Id);
    const product = props.items.find(item => item.title === params.Id);
    console.log(product);
    return <>
        <h1>Product Details</h1>
        <p className={classes.title}>{params.Id}</p>
        <div className={classes.image}>
            <img src={product.imageUrl} alt="pic"/>
        </div>
    </>
}

export default ProductDetails;