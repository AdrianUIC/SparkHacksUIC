import './NavBar.css'

const Navbar = (props) => {

  // define links for each tab
  const link_Home = "";
  const link_WorkForceCenters = "";
  const link_FoodBanks = "";
  const link_Shelters = "";
  const link_CommunityCenters = "";
  const link_HealthServices = "";

  // define all tabs
  return (
    <nav className="navbar">
      <h1>Helping Hands</h1>
      <div className="links">
        <button onClick= {() => props.passedFunc("home")}>Home</button>
        <button onClick= {() => props.passedFunc("workforce_centers")}>Workforce Centers</button>
        <button onClick= {() => props.passedFunc("food_banks")}>Food Banks</button>
        <button onClick= {() => props.passedFunc("shelters")}>Shelters</button>
        <button onClick= {() => props.passedFunc("extreme_weather")}>Extreme Weather</button>
        <button onClick= {() => props.passedFunc("community_centers")}>Community Services</button>
        <button onClick= {() => props.passedFunc("health_services")}>Health Services</button>
      </div>
    </nav>
  );
}
 
export default Navbar;