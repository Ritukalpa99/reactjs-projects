import classes from "./Content.module.css"
import ContentItem from "./ContentItem";
const Content = (props) => {
    return <section className={classes.container}>
        <h2>Music</h2>
        <div className={classes['music-content']}>
         {props.items.map((item) => {
            return <ContentItem item={item}/>
            
        })} 
        
        </div>
    </section>
}

export default Content;