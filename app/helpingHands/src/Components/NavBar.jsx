import '../Styling/NavBar.css'

const Navbar = (props) => {

  // define all tabs
  return (
    <div>
    <nav className="navbar">
      <h1>Helping Hands</h1>
      <div className="links">
        <button onClick= {() => props.passedFunc("home")}>Home</button>
        <button onClick= {() => props.passedFunc("workforce_centers")}>Workforce Centers</button>
        <button onClick= {() => props.passedFunc("food_banks")}>Food Banks</button>
        <button onClick= {() => props.passedFunc("shelters")}>Shelters</button>
        <button onClick= {() => props.passedFunc("warming_centers")}>Warming Centers</button>
        <button onClick= {() => props.passedFunc("cooling_centers")}>Cooling Centers</button>
        <button onClick= {() => props.passedFunc("community_services")}>Community Services</button>
        <button onClick= {() => props.passedFunc("health_services")}>Health Services</button>
      </div>
    </nav>
    </div>
  );
}
 
export default Navbar;