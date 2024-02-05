const User = require("../models/User");



exports.registerUser = async (req, res) => {
  
    const { name, email, password } = req.body;
  try{

      const existingUser = User.findOne({email});
    
      if(!existingUser)
      {
         await User.create({name,email,password});
         res.status(200).json({message:"Registration successful!"});
      }
      else{
        res.status(404).json({message:"Email already registered"});
      }
  }
  catch{
    res.status(501).json({message:"Internal server error!"});
  }

};

exports.loginUser =  async (req, res) => {
  const { email, password } = req.body;

  try{
    const {existingEmail,existingPaasword} = User.findOne({email,password});
    if(!existingEmail || !existingPaasword)
    {
        res.status(404).json({message:"No user found!"});
    }
    else{
        res.status(200).json({message:"Login successful!"});
    }
  }
  catch{
    res.status(501).json({message:"Email or password incorrect!"});
  }
  
  
};

exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    // delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
}

exports.authChecker = (req, res) => {
  const sessUser = req.session.user;
  if (sessUser) {
    return res.json(sessUser);
  } else {
    return res.status(401).json({ msg: "Unauthorized" });
  }
};