const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlewares");
const {
  createUser,
  updatePassword,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrdreStatus,
  getAllOrders,
  getOrderByUserId,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderIncome,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getSingleOrder,
  updateOrder,
} = require("../controller/userCtrl");
const { checkout, paymentVerification } = require("../controller/paymentCtrl");
const router = express.Router();
//authroute->userctrl->usermodel tocheck user
router.post("/login", loginUserCtrl);
router.post("/register", createUser);
router.post("/forgot-password-token",forgotPasswordToken);
router.put("/reset-password/:token",resetPassword);
router.put("/order/update-order/:id",authMiddleware,isAdmin,updateOrdreStatus);


router.put("/password",authMiddleware,updatePassword)


router.post("/admin-login",loginAdmin);
router.post("/cart",authMiddleware,userCart);


//all users
router.get("/all-users", getallUser);
router.get("/getmyorders",authMiddleware,getMyOrders);
// router.get("/get-orders",authMiddleware, getOrders);
router.get("/getallorders", authMiddleware,isAdmin,getAllOrders);
router.put("/updateOrder/:id", authMiddleware,isAdmin,updateOrder);
router.get("/getaOrder/:id", authMiddleware,isAdmin,getSingleOrder);
// router.post("/getorderbyuser/:id", authMiddleware,isAdmin,getOrderByUserId);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

//single user
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/getMonthWiseOrderIncome", authMiddleware, getMonthWiseOrderIncome);
router.get("/getYearlyTotalOrders", authMiddleware, getYearlyTotalOrders);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
router.post("/cart/applycoupon",authMiddleware,applyCoupon);

router.post("/cart/create-order",authMiddleware,createOrder);

//without admin then use admin functionality.
//authentication bt token
router.get("/:id", authMiddleware, isAdmin, getaUser);

router.delete("/update-product-cart/:cartItemId/:newQuantity",authMiddleware,updateProductQuantityFromCart);
router.delete("/delete-product-cart/:cartItemId",authMiddleware,removeProductFromCart);
router.delete("/empty-cart",authMiddleware,emptyCart);

//delete a user
router.delete("/:id", deleteaUser);

//update a user
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);

//Blocking users
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
