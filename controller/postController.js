const Post = require("../model/view/postModel")

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res, json({
            post: savedPost,
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "Error with creating post",
        });
    }
}