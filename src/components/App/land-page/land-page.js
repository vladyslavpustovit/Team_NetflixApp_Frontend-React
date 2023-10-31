import React from "react";
import{Link} from "react-router-dom"
import TabComponent from "../Tabs/index"
import Footer from "../../footer/footer";
import "./land-page.css";

function Landing() {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
        <Link to="/login" className="btn btn-rounded">Sign In</Link>
      </div>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel Anytime</p>
      
      <Link to="/" className="btn btn-xl">
        Watch Free For 30 Days
       <i className="fas fa-chevron-right btn-icon"></i> 
      </Link>
      </div>
     <TabComponent/>
     <Footer/>
    </header>
  );
}

export default Landing;
