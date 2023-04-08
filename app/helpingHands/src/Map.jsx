import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import * as locationData from "./data/libraries.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet"

function Map() {
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

  return (
    <MapContainer center={[41.8781, -87.6298]} zoom={14} scrollWheelZoom={false}>
      {locationData.features.map(location => (
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
      ))}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;