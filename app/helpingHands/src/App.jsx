import Navbar from "./NavBar.jsx";  // component NavBar
import './NavBar.css';
import ServiceMap from "./ServiceMap.jsx";   // component Map
import './ServiceMap.css'; 

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="service-map">
        <ServiceMap service="libraries"/>
      </div>
    </div>
  )
}

export default App
