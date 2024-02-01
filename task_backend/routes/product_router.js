const express = require('express');
const router = express.Router();
const { getProducts, addProduct, getProductsByCategory, getProductsByPriceRange } = require('../controllers/products');

// Get all products
router.get('/', getProducts);

// Add a new product
router.post('/', addProduct);

// Get products by category
router.get('/category/:category', getProductsByCategory);

// Get products by price range
router.get('/price-range/:maxPrice', getProductsByPriceRange);

module.exports = router;
