const jwt =require("jsonwebtoken");
const generateRefreshToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'3d'});
}
module.exports={generateRefreshToken};
//refreshToken.js -> userCtrl.js -> index.js