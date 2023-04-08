import React, { useState, useEffect } from "react";
import './ServiceApp.css'
import ServiceMap from "./ServiceMap.jsx";   // component Map
import ServiceInfo from "./ServiceInfo.jsx";   // component Map

function ServiceApp(props) {
  const [data, setData] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function getData(service) {
    return fetch(
      `./src/data/${service}.json`,
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
    getData(props.service)
  }, [])

  return (
    <div className="service-app">
      <div className="service-info">
        <ServiceInfo data={data} isLoaded={dataIsLoaded}/>
      </div>
      <div className="service-map">
        <ServiceMap data={data} isLoaded={dataIsLoaded}/>
      </div>
    </div>
  )
}

export default ServiceApp
