import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import image from "../assets/laptop.jpg"
// import FeatureProd from "./Feature"


const Products = () => {
    const [data, setData] = useState([]);
axios.defaults.withCredentials = true;
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("backend-task-products-and-login-api.vercel.app/api/products");
            console.log(response);
            setData(response.data);
        }

        fetchData();
    }, [data]);


    return (
        <div className="product-details">
            <h1 className="prod-head">Products Page</h1>
           
            <button><Link to="/add">Add Products</Link></button>
            <div className="product-cards">
                {
                    data && data.map((product, index) => {
                        return (
                            <div className="product">
                                <div className="imageContainer">
                                    <img src={image} alt="" />
                                </div>
                                <div className="details">
                                    <h1>{product.title}</h1>
                                    <p className="desc">{product.description}</p>
                                    <div className="cat-price">
                                    <p className="price">{`Rs ${product.price}`}</p>
                                    <p>{product.category}</p>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Products;

/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/a3s0h/e-commerce-store.git
git push -u origin main
*/
