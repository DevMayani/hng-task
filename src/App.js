import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React from "react";
import Link from "./Link";
import Profile from "./Profile";
import Social from "./Social";
import Footer from "./Footer"
import Contact from "./Contact";




const App = () => {
  return (
    <Router>
    <Profile 
    />
    <Link />
    <Social />
    <Footer />
    <Routes> 
       {/* <Route exact path="/contact" element={<Contact />} /> */}
       </Routes>
   
    </Router>
  )
}







export default App