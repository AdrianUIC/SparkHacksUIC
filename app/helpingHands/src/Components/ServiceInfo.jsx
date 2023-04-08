import React, { useState } from "react";
import '../Styling/ServiceInfo.css';
import "leaflet/dist/leaflet.css";
import { Card, Button } from 'react-bootstrap'

function ServiceInfo(props) {
  if (props.isLoaded) {
    return (<div class = "scroll"> {

      props.data.features.map(location => (
        <Card>
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