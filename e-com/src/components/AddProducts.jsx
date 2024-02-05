import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
// import camera from "../assets/camera.jpg"

const AddProduct = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate(); // Initialize useNavigate

    const addDetails = async () => {
        try {
            const productDetails = {
                title: name,
                description: desc,
                price: parseFloat(price),
                category: category
            };

            await axios.post("http://localhost:3000/api/products", productDetails);

            // Clear the input fields
            setName("");
            setDesc("");
            setPrice("");
            setCategory("");

            // Navigate to the home page ("/") after successful submission
            navigate("/");

            console.log("Product added successfully!");
        } catch (error) {
            console.error("Error adding product:", error);
            // Handle the error as needed
        }
    };

    return (
        <div className="addProd">
            <div className="header-img">
                <img src="https://images.pexels.com/photos/5998055/pexels-photo-5998055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <h1>Add Products</h1>
            <form onSubmit={addDetails}>
                Name  <input type="text" placeholder="Enter Product Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                Category  <input type="text" placeholder="Enter Category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                Price  <input type="text" placeholder="Enter Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                Desc  <textarea type="text" cols={30} rows={10} placeholder="Enter Product Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
