const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a new user
const register = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Hashed Password:', hashedPassword); 
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.json({ message: 'Registration successful' });
    } catch (error) {
      next(error);
    }
  };
  

// Login with an existing user
const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Entered Password:', password);

        // Use bcrypt.compare to securely compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = generateToken(user._id);
            res.json({ token });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Login Error:', error);
        next(error);
    }
};
  


module.exports = { register, login };