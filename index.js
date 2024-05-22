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
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
  
 
app.use(morgan("dev"));
app.use(cors());
//generating response to request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user',authRouter,config);
app.use('/api/product',productRouter,config);
app.use('/api/blog',blogRouter,config);
app.use('/api/prodcategory',prodcategoryRouter,config);
app.use('/api/blogcategory',blogcategoryRouter,config);
app.use('/api/brand',brandRouter,config);
app.use('/api/coupon',couponRouter,config);
app.use('/api/color',colorRouter,config);
app.use('/api/enquiry',enqRouter,config);
app.use('/api/upload',uploadRouter,config);
//after the authentication

app.use(notFound);
app.use(errorHandler); 

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running at PORT ${PORT}`);
});