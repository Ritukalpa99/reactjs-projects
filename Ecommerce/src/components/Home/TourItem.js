import classes from "./TourItem.module.css"

const TourItem = (props) => {
    return <div className={classes['tour-item']}>
        <span className={classes['tour-date']}>{props.date}</span>
        <span className={classes['tour-place']}>{props.place}</span>
        <span className={classes['tour-spec-place']}>{props.location}</span>
        <button className={classes['buy-btn']}>BUY TICKETS</button>
    </div>
}

export default TourItem;

