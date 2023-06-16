const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

// initialize routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories')

// allows us to use our dotenv file variables.
dotenv.config();

// allows us to send JSON objects through our express server
app.use(express.json());

// Connect Mongo DB
// @ts-ignore
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
// @ts-ignore
}).then(console.log("Connected to Mongo DB"))
    .catch(err => {
    console.log(err);
});

// Add files to storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})


// set up routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


// Set up server to listen to port 3000
app.listen("5000", ()=>{
    console.log('backend is running');
});
