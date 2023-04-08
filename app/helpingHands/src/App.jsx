import Navbar from "./NavBar.jsx";  // component NavBar
import ServiceApp from "./ServiceApp.jsx";   // component Map

function App(props) {

  return (
    <div className="app">
        <Navbar />
        <ServiceApp service={props.service}/>
    </div>
  )
}

export default App
