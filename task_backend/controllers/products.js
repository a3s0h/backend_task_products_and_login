const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addProduct = async (req, res) => {
    try {
      const products = req.body;
  
      const newProducts = await Product.create(products);
  
      res.status(201).json({ message: "Products added successfully", products: newProducts });
    } catch (error) {
      console.error("Error adding products:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProductsByPriceRange = async (req, res) => {
  try {
    const { maxPrice } = req.params;

    const products = await Product.find({ price: { $lte: maxPrice } });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products by price range:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductsByCategory,
  getProductsByPriceRange,
};
