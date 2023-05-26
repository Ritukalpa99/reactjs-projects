import classes from "./ContentItem.module.css"
const ContentItem = (props) => {
	return (
		<div className={classes.container}>
			<h3>{props.item.title}</h3>
            <div className={classes['image-container']}>
                <img className={classes.image} src={props.item.imageUrl} alt="some"/>
            </div>
            <div className={classes['product-details']}>
                <span>
                    $ 
                    <span>{props.item.price}</span>
                </span>
                <button>ADD TO CART</button>
            </div>
		</div>
	);
};

export default ContentItem;
