import './Styling/App.css'
import Navbar from "./Components/NavBar.jsx";  // component NavBar
import PageContent from "./Components/PageContent.jsx"
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="app">
        <Navbar passedFunc={setCurrentPage}/>
        <PageContent content={currentPage}/>
    </div>
  )
}

export default App
