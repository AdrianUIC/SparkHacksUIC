import Navbar from "./NavBar.jsx";  // component NavBar
import PageContent from "./PageContent.jsx"
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Libraries');
  return (
    <div className="app">
        <Navbar passedFunc={setCurrentPage}/>
        <PageContent content={currentPage}/>
    </div>
  )
}

export default App
