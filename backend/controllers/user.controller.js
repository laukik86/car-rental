const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
exports.register = async(req, res)=>{
 try{
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser)
     return res.status(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    res.status(201).json({message: "User registered successfully"});
 } catch(err){
    res.status(500).json({message: err.message})
 }
};

exports.login = async (req, res)=>{
    try{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({message: "Invalid Credentials"});
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(400).json({message: "Invalid Credentials"});

    const token = jwt.sign(
        {userId: user._id},
        secret,
        {expiresIn: "1d"}
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24*60*60*1000,
    });

    res.json({message: "Login Successful"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
};