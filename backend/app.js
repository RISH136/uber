const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRouters=require("./routes/user.routes")
const captainRouters=require("./routes/captain.routes");
const mapRouters=require("./routes/map.routes");
const rideRouters=require("./routes/ride.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// app.use('/',(req,res)=>{
//     res.send('hello');
// })


app.use("/users",userRouters);
app.use("/captains",captainRouters);
app.use("/maps",mapRouters);
app.use('/rides',rideRouters);


module.exports=app;



