const express =require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app=express();


//Middleware
app.use(cors());
app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


//Listen

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});