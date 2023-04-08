import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ServiceMap.css';
import "leaflet/dist/leaflet.css";
import L from "leaflet"
// import * as locationData from "./data/libraries.json";

function ServiceMap(props) {
  const [data, setData] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function getData(props) {
    return fetch(
      `./src/data/${props.service}.json`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json["detail"] === "Not Found") {
          setDataIsLoaded(false);
        } else {
          setData(json);
          setDataIsLoaded(true);
        }
      });
  }

  useEffect(() => {
    getData(props)
  }, [])

  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

  if (!dataIsLoaded) {
    return (
      <MapContainer
        center={[41.8781, -87.6298]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
    // If data is loaded, show the map with markers
  } else if (dataIsLoaded) {
    return (
      <MapContainer center={[41.8781, -87.6298]} zoom={14} scrollWheelZoom={false}>
        {
          data.features.map(location => (
            <Marker
              key={location.properties.address}
              position={[
                location.geometry.coordinates[1],
                location.geometry.coordinates[0]
              ]}
              onClick={() => {
                setActiveLocation(location);
              }}
              icon={customMarker}
            >
              <Popup
                position={[
                  location.geometry.coordinates[1],
                  location.geometry.coordinates[0]
                ]}
              >
                <div>
                  <h3>{location.properties.name_}</h3>
                  <p>{location.properties.address}</p>
                </div>
              </Popup>
            </Marker>
          ))
        }

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    );
  }
}

export default ServiceMap;