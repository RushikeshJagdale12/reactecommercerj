import React from "react";
import Products from "./Products";



const Home = () => {
    return(

  <div className="hero">
  <div className="card bg-dark text-dark border-0">
  <img src="./assets/bg.jpg" className="card-img" alt="Background" height=" 550px" />
  <div className="card-img-overlay  mt-5 flex-column  justify-content-center mx-3">
  <div className="container "></div>
    <h5 className="card-title display-3 fw-bolder my-3 mb-0">NEW SEATION ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
  </div>
   </div>
   <Products/>
    </div>
    );
};
export default Home;