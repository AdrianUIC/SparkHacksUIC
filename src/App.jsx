import Navigation from "./components/Navigation.jsx";  // component NavBar
import PageContent from "./components/PageContent.jsx"
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="w-full overflow-hidden">
        <Navigation passedFunc={setCurrentPage}/>
        <PageContent content={currentPage}/>
    </div>
  )
}

export default App
