import express from "express";
import {PORT,mongoDBURL} from './config.js';
import mongoose from "mongoose";
import itemsRoute from './routes/itemsRoute.js';
import {User} from "./models/usermodel.js";
import menuRoute from "./routes/menuRoute.js";
import orderRoute from "./routes/orderRoute.js";
import profitRoute from "./routes/profitRoute.js";
import  UserRoute from "./routes/userRoute.js";


import cors from 'cors';
const app = express();

app.use(express.json());

//Middle ware for handling cors policy


/*app.use(
    cors({
    origin:'http://localhost:3006',
    methods:['GET','POST','PUT','DELETE'],
    allowHeaders:['Content-Type'],
   })
);*/
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true
  }));
app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome');
});


app.use('/items',itemsRoute);
app.use('/',menuRoute);
app.use('/',orderRoute);
app.use('/',profitRoute);
app.use('/auth',UserRoute);

mongoose
   .connect(mongoDBURL)
   .then(()=>{
     console.log('connected to mongodb');
     app.listen(PORT,() =>{
        console.log(`listening to the port: ${PORT}`);
    });
   })
   .catch((error)=>{
    console.log(error);
   });
   