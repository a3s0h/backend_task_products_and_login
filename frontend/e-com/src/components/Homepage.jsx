import React from "react";
import {Link} from "react-router-dom"
const HomePage = () =>{
    return(
        <div className="home">
            <h1>Get all latest Deals here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ab?</p>
            <button><Link to="/get">Shop</Link></button>
        </div>
    );
}

export default HomePage;