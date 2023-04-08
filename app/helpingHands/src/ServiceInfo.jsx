import React, { useState } from "react";
import './ServiceInfo.css';
import "leaflet/dist/leaflet.css";
import { Card, Button } from 'react-bootstrap'

function ServiceInfo(props) {
  if (props.isLoaded) {
    return (<> {
      props.data.features.map(location => (
        <Card>
          <Card.Body>
            <Card.Title>{location.properties.name_}</Card.Title>
            <Card.Text>
              {location.properties.address}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
    } </>);
  } else {
    return (
      <div>Data is loading...</div>
    )
  }
}

export default ServiceInfo;