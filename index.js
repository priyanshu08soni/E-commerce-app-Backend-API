const express=require('express');
const app =express();
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv=require("dotenv").config();
const PORT=process.env.PORT||4000;
const authRouter=require('./routes/authRoute');
const productRouter=require('./routes/productRoute');
const blogRouter=require('./routes/blogRoute');
const prodcategoryRouter=require('./routes/prodcategoryRoute');
const blogcategoryRouter=require('./routes/blogcategoryRoute');
const brandRouter=require('./routes/brandRoute');
const colorRouter=require('./routes/colorRoute');
const enqRouter=require('./routes/enqRoute');
const couponRouter=require('./routes/couponRoute');
const uploadRouter = require('./routes/uploadRoute');
const cookieParser=require("cookie-parser");
const morgan=require("morgan");
const cors=require("cors");
dbConnect();
app.use(morgan("dev"));
app.use(cors({
    "Access-Contorl-Allow-Origin":"https://e-commerce-app-frontend-pink.vercel.app",
    origin:"https://e-commerce-app-frontend-pink.vercel.app",
    methods:["POST","GET","PUT","DELETE","OPTIONS"],
    credentials:true,
    optionsSuccessStatus:true,
    'Access-Control-Allow-Origin':"https://e-commerce-app-frontend-pink.vercel.app",
    preflightContinue:true
}));
const headers=new Headers();
headers.append(Access-Control-Allow-Origin,"https://e-commerce-app-frontend-pink.vercel.app")
//generating response to request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user',authRouter,headers);
app.use('/api/product',productRouter,headers);
app.use('/api/blog',blogRouter,headers);
app.use('/api/prodcategory',prodcategoryRouter,headers);
app.use('/api/blogcategory',blogcategoryRouter,headers);
app.use('/api/brand',brandRouter,headers);
app.use('/api/coupon',couponRouter,headers);
app.use('/api/color',colorRouter,headers);
app.use('/api/enquiry',enqRouter,headers);
app.use('/api/upload',uploadRouter,headers);
//after the authentication

app.use(notFound);
app.use(errorHandler); 

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running at PORT ${PORT}`);
});