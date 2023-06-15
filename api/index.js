const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

// allows us to use our dotenv file variables.
dotenv.config();

// allows us to send JSON objects through our express server
app.use(express.json());

// Connect Mongo DB 
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to Mongo DB")).catch(err=>{
    console.log(err)
});

// set up routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute);


// Set up server to listen to port 3000
app.listen("3000", ()=>{
    console.log('backend is running');
});


