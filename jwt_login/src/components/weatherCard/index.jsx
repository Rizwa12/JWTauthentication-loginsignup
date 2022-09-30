 import "./index.css"
import moment from "moment";
import {Card,Button} from 'react-bootstrap';
//
let weatherCard = ({date,temp,min,max})=> {
    return (
      
      <Card style={{ width: '18rem' }} bg="" border="success">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      
      <Card.Body>
        <Card.Title>{moment(date).format("dddd hanpm")}</Card.Title>
       <Card.Text>
        <h1>{temp}°C</h1>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
       <Card.Title>{min}°C - {max}°C</Card.Title>
      </Card.Body>
      
    </Card>
    
    //  <div className="card">
    //   <div>{moment(date).format("dddd hanpm")}</div>
    //   <h1>{temp}°C</h1>
    //   <div>{min}°C - {max}°C</div>
    //  </div>
    );
  }
  export default weatherCard;