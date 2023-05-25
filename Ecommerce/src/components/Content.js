
import { Card, Button } from "react-bootstrap";
const Content = (props) => {
    return <>
    <Card style={{width: '18rem'}}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
            <Card.Img src={props.src}/>
            <Card.Text>{props.price}</Card.Text>
            <Button>ADD TO CART</Button>
        </Card.Body>
    </Card>
    </>
}

export default Content;