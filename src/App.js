import React from "react";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Investors from "./components/Investors";



export default function App() {
  return (
  <Router>
        <Navbar/>
      <Routes>
           <Route exact path="/" element={<Landing/>}/>
           <Route exact path='/landing' element={<Landing/>}/>
           <Route exact path='/investors' element={<Investors/>}/>
           <Route exact path='/footer' element = {<Footer/>}/>
      </Routes>
        
  </Router>
  
  );
}