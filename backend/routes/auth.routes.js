const express = require('express');
const router = express.Router();
const {login, register} = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
router.post('/login', login);
router.post('/register', register);

router.get('/profile', authMiddleware, (req, res)=>{
    res.json({message: "Welcome", userId: req.userId});
});

module.exports = router;