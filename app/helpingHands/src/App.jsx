import Navbar from "./NavBar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={WorkForceCenters} />
          <Route path="/about" component={Services} />
          <Route path="/about" component={Services} />
          <Route path="/about" component={Services} />
          <Route path="/about" component={Services} />
        </Switch>
      </div>
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      
      <h1>Helping Hands</h1>
    </div>
    </Router>
  )
}

export default App
