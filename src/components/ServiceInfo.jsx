import "leaflet/dist/leaflet.css";

function ServiceInfo(props) {
  if (props.isLoaded) {
    return (
      <div className="overflow-scroll"> {
        props.data.features.map(location => (
          <div>
            <h3>{location.properties.name}</h3>
            <p> Address: {location.properties.address} </p>
            <p> Phone: {location.properties.phone} </p>
            <p> Hours: {location.properties.hours} </p>
          </div>
        ))
      } </div>
    );
  }
  return (<div>Data is loading...</div>);
}

export default ServiceInfo;
