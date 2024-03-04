const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    shippingInfo:{
      firstName:{
        type:String,
      },
      lastName:{
        type:String,
      },
      address:{
        type:String,
      },
      city:{
        type:String,
      },
      state:{
        type:String,
      },
      other:{
        type:String,
      },
      pincode:{
        type:Number,
      }
    },
    paymentInfo:{
      rezorpayOrderId:{
        type:String,
        requiredPaths:true,
      },
      rezorpayPaymentId:{
        type:String,
        requiredPaths:true,
      }
    },
    orderItems:[
      {
        product:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Product",
          required:true
        },
        color:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Color",
          required:true
        },
        quantity:{
          type:Number,
          required:true
        },
        price:{
          type:Number,
          required:true
        }
      }
    ],
    paidAt:{
      type:Date,
      default:Date.now()
    },
    totalPrice:{
      type:Number,
      required:true,
    },
    totalPriceAfterDiscount:{
      type:Number,
      required:true,
    },
    orderStatus:{
      type:String,
      default:"Ordered"
    }
  },
  {
    timestamps:true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
