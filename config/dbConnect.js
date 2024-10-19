const {default:mongoose}=require("mongoose");
let uri=`mongodb+srv://priyanshus20k4:Priyanshu%40834@mycluster.dnwjrp2.mongodb.net/Products?retryWrites=true&w=majority&appName=MyCluster`
const dbConnect=()=>{
    try {
        const conn=mongoose.connect(`mongodb://localhost:27017/digitic`);
        console.log("Database connect");
    } catch (error) {
        throw new Error(error);
    }
}
module.exports=dbConnect;