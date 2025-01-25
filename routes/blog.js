const express = require('express')
const router = express.Router();

//import controller
//const { postController } = require("../controllers/postController");

const { dummyLink } = require("../controller/LikeController");
const { createCommentController } = require("../controller/CommentController");

//router.post("/postBlog", postController);
router.get("/dummyroute", dummyLink);
router.post("/comments/create",createCommentController);




module.exports = router;