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
} = require("../controller/userCtrl");
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password-token",forgotPasswordToken);
router.put("/reset-password/:token",resetPassword);
router.put("/order/update-order/:id",authMiddleware,isAdmin,updateOrdreStatus);


router.put("/password",authMiddleware,updatePassword)

//authroute->userctrl->usermodel tocheck user
router.post("/login", loginUserCtrl);

router.post("/admin-login",loginAdmin);
router.post("/cart",authMiddleware,userCart);


//all users
router.get("/all-users", getallUser);
router.get("/get-orders",authMiddleware, getOrders);
router.get("/getallorders", authMiddleware,isAdmin,getAllOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

//single user
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.post("/cart/applycoupon",authMiddleware,applyCoupon);

router.post("/cart/cash-order",authMiddleware,createOrder);

//without admin then use admin functionality.
//authentication bt token
router.get("/:id", authMiddleware, isAdmin, getaUser);

router.delete("/empty-cart",authMiddleware,emptyCart)

//delete a user
router.delete("/:id", deleteaUser);

//update a user
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);

//Blocking users
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
