const User=require('../models/userModels');
const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');

const authMiddleware=asyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try {
            if(token){
                //token get from headers
                const decoded=jwt.verify(token,process.env.JWT_SECRET);
                const user=await User.findById(decoded?.id);
                req.user=user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized , token expired ,Please Login again.")
        }
    }else{
        throw new Error("There is no token attached to header");
    }
});
//Admin can access to any other user by passing id in url and token of admin in authentification.
const isAdmin=asyncHandler(async(req,res,next)=>{
    const {email}=req.user;
    const adminUser=await User.findOne({email});
    if(adminUser.role!=="admin"){
        throw new Error("You are not an Admin")
    }else{
        next();
    }
    
})


module.exports={authMiddleware,isAdmin};