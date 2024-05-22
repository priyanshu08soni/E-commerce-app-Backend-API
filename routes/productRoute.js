const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/ProductCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddlewares");
const { config } = require("../config/axiosconfig");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/", getAllProduct,config);
router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
