const Razorpay = require('razorpay');

const instance=new Razorpay({
    key_id:"rzp_test_H8nqZAevFiKHZF",
    key_secret:"HCgCH6W0dNjk9s3BAIz00xqW",
});

const checkout = async (req, res, next) => {
    try {
        const { amount } = req.body;
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount provided",
            });
        }

        const options = {
            amount: amount * 100,
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);

        next(error);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const paymentVerification=async(req,res)=>{
    const {razorpayOrderId,razorpayPaymentId}=req.body
    res.json({
        razorpayOrderId,
        razorpayPaymentId,
    })
}

module.exports={
    checkout,
    paymentVerification,
}