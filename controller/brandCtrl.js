const brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createbrand = asyncHandler(async (req, res) => {
  try {
    const newbrand = await brand.create(req.body);
    res.json(newbrand);
  } catch (error) {
    throw new Error(error);
  }
});
const updatebrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedbrand = await brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedbrand);
  } catch (error) {
    throw new Error(error);
  }
});
const deletebrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedbrand = await brand.findByIdAndDelete(id);
    res.json(deletedbrand);
  } catch (error) {
    throw new Error(error);
  }
});

const getbrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getabrand = await brand.findById(id);
    res.json(getabrand);
  } catch (error) {
    throw new Error(error);
  }
});
const getallbrand = asyncHandler(async (req, res) => {
  try {
    const getallbrand = await brand.find();
    res.json(getallbrand);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createbrand,
  updatebrand,
  getbrand,
  deletebrand,
  getallbrand,
};
