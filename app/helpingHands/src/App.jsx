import './App.css'
import Navbar from "./NavBar.jsx";  // component NavBar
import PageContent from "./PageContent.jsx"

function App() {
  return (
    <div className="app">
        <Navbar />
        <PageContent content="libraries"/>
    </div>
  )
}

export default App
