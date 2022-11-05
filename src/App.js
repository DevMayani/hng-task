import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React from "react";
import Home from './Home';
import Contact from "./Contact";




function App() {
  return (

    <Router>

    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>

    <Routes> 
       <Route path="/contact" element={<Contact />} />
    </Routes>
   
    </Router>
  );
}


export default App