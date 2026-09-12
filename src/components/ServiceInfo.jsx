import "leaflet/dist/leaflet.css";

function ServiceInfo(props) {
  if (props.isLoaded) {
    return (
      <div className="overflow-scroll flex-shrink-0 lg:w-1/3"> {
        props.data.features.map(location => (
          <div className="border rounded w-full">
            <h3 className="font-bold text-xl">{location.properties.name}</h3>
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
