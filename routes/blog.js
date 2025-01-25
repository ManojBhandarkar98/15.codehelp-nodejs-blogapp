const express = require('express')
const router = express.Router();

//import controller
const { createPost,getAllPosts } = require("../controllers/postController");
const { dummyLink,likePost } = require("../controller/LikeController");
const { createCommentController } = require("../controller/CommentController");

router.post("/posts/create", createPost);
router.get("/dummyroute", dummyLink);
router.post("/comments/create",createCommentController);
router.get("/posts",getAllPosts);
router.post("/likes/like", likePost);




module.exports = router;