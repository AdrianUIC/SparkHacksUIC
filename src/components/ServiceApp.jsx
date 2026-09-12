import React, { useState, useEffect } from "react";
import ServiceMap from "./ServiceMap.jsx";
import ServiceInfo from "./ServiceInfo.jsx";

function ServiceApp(props) {
  const [data, setData] = useState();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function getData(service) {
    console.log('getting data')
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
  }, [props.service]);

  return (
    <div className="flex justify-between lg:flex-row flex-col-reverse w-screen">
      <ServiceInfo data={data} isLoaded={dataIsLoaded} />
        <ServiceMap data={data} isLoaded={dataIsLoaded} />
    </div>
  );
}

export default ServiceApp
