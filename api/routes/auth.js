const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER
router.post("/register", async (req,res)=>{
    try{
        //generate a hashed password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});
// LOGIN

router.post("/login", async(req, res)=>{
    try{
        // check to see if user exists in database
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong credentials!");
        // checks to see if hashed password and password sent through body match
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong password!");

        const {password, ...others} = user._doc;
        //returns user if both username and password is correct.
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
