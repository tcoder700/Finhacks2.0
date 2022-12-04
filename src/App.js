import React from "react";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function App() {
  return (
      <React.Fragment>
        <Navbar />
        <Landing />
        <Footer />
        
      </React.Fragment>
  
  )
}