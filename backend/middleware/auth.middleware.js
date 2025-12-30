const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) =>{
    const token = req.cookies.token;

    if(!token) return res.status(401).json({message: "Unauthorized"});

    try{
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch(error){
        res.status(400).json({message: err.message});
    }
};

module.exports = authMiddleware;