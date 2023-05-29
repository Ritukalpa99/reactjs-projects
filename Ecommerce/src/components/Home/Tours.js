import TourItem from "./TourItem";
import classes from "./Tours.module.css"

const tourDetails = [
    {
        date : "JUL16",
        place : "DETROIT,MI",
        location : "DTE ENERGY MUSIC THEATRE"
    },
    {
        date : "JUL19",
        place : "TORONTO,ON",
        location : "BUDWEISER STAGE"
    },
    {
        date : "JUL 22",
        place : " BRISTOW, VA",
        location : "JIGGY LUBE LIVE"
    },
    {
        date : "JUL 29",
        place : "PHOENIX, AZ",
        location : " AK-CHIN PAVILION"
    },
    {
        date : "AUG 2",
        place : "LAS VEGAS, NV",
        location : "T-MOBILE ARENA"
    },
    {
        date : "AUG 7",
        place : "CONCORD, CA",
        location : "CONCORD PAVILION"
    },
]
const Tours = () => {
    return <section className={classes.tours}>
        <h2 className={classes.title}>TOURS</h2>
        {
            tourDetails.map((item) => {
                return <TourItem key={item.date} date={item.date} place={item.place} location={item.location}/>
            })
        }
        {/* <TourItem /> */}
    </section>
}

export default Tours;