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
app.use(cors())

//generating response to request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/blog',blogRouter);
app.use('/api/prodcategory',prodcategoryRouter);
app.use('/api/blogcategory',blogcategoryRouter);
app.use('/api/brand',brandRouter);
app.use('/api/coupon',couponRouter);
app.use('/api/color',colorRouter);
app.use('/api/enquiry',enqRouter);
app.use('/api/upload',uploadRouter);
//after the authentication

app.use(notFound);
app.use(errorHandler); 

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running at PORT ${PORT}`);
});