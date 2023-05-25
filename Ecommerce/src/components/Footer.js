import classes from "./Footer.module.css"
const Footer = () => {
    return (
      <footer className={classes.Footer}>   
           <div className={classes.title}>
            <h1>The Generics</h1>
            </div>  
            <div className={classes.links}>
              <div>Youtube</div>
              <div>Spotify</div>
              <div>Facebook</div>
            </div>
      </footer>
    );
  };
  
//   export default Footer;
export default Footer;