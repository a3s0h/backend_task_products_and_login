const express = require('express');
const connectDB = require('./db/user'); // Assuming this file connects to the database
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRouter = require('./routes/product_router'); // Import product router
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());
app.use(cors());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

// Use the product router
app.use('/api/products', productRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
