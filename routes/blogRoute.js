const express=require('express');
const router=express.Router();
const {authMiddleware, isAdmin}=require('../middlewares/authMiddlewares');
const { createBlog, updateBlog, getaBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require('../controller/blogCtrl');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages');
//post->put->get->delete
router.post('/',authMiddleware,isAdmin,createBlog);
router.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 10),
    blogImgResize,
    uploadImages
);
const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://e-commerce-app-frontend-pink.vercel.app",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
router.put('/dislikes',authMiddleware,dislikeBlog);
router.put('/likes',authMiddleware,likeBlog);
router.put('/:id',authMiddleware,isAdmin,updateBlog);
router.get('/:id',getaBlog,config);
router.get('/',getAllBlogs,config);
router.delete('/:id',authMiddleware,isAdmin,deleteBlog);
module.exports=router;