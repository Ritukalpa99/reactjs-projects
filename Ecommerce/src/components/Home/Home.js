import classes from "./Home.module.css"
import Tours from "./Tours"
const Home = () => {
    return <><div className={classes.header}>
        <button className={classes['latest-album']}>
            Get out Latest Album
        </button>
        <button className={classes['play-btn']}>
        ►
        </button>
    </div>
    <Tours />
    </>
}

export default Home;