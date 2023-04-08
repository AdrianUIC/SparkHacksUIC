const Navbar = () => {

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
        <a href={ link_Home }>Home</a>
        <a href={ link_WorkForceCenters }>WorkForce Centers</a>
        <a href={ link_FoodBanks }>Food Banks</a>
        <a href={ link_Shelters }>Shelters</a>
        <a href={ link_CommunityCenters }>Community Centers</a>
        <a href={ link_HealthServices }>Health Services</a>
      </div>
    </nav>
  );
}
 
export default Navbar;