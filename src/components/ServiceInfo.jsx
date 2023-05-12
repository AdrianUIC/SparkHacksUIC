import '../styles/ServiceInfo.css';
import "leaflet/dist/leaflet.css";
import { Card } from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid';

function ServiceInfo(props) {
  if (props.isLoaded) {
    return (<div className = "scroll"> {
      props.data.features.map(location => (
        <Card key={uuidv4()} className="mx-5" style={{width: '24rem'}}>
          <Card.Body>
            <Card.Title>{location.properties.name}</Card.Title>
            <Card.Text>
              Address: {location.properties.address}
              <br/>
              Phone: {location.properties.phone}
              <br/>
              Hours: {location.properties.hours}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
    } </div>);
  } else {
    return (
      <div>Data is loading...</div>
    )
  }
}

export default ServiceInfo;