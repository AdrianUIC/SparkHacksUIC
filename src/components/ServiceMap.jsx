import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import { v4 as uuidv4 } from 'uuid';

function ServiceMap(props) {
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

  if (props.isLoaded) {
    // if data is loaded, show the map with markers
    return (
      <div className='lg:w-2/3 h-1/2'>
        <MapContainer center={[41.8781, -87.6298]} zoom={14} scrollWheelZoom={false}>
          {
            props.data.features.map(location => (
              <Marker
                key={uuidv4()}
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
                    <h1>{location.properties.name}</h1>
                    <p> Address: {location.properties.address} </p>
                    <p> Phone: {location.properties.phone} </p>
                    <p> Hours: {location.properties.hours} </p>
                  </div>
                </Popup>
              </Marker>
            ))
          }

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        </MapContainer>
      </div>
    );
  }

  // if data is not loaded, just center on Chicago
  // TODO: remove?
  return (
    <MapContainer center={[41.8781, -87.6298]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default ServiceMap;
