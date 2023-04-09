import './Styling/App.css'
import Navigation from "./Components/Navigation.jsx";  // component NavBar
import PageContent from "./Components/PageContent.jsx"
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="app">
        <Navigation passedFunc={setCurrentPage}/>
        <PageContent content={currentPage}/>
    </div>
  )
}

export default App
