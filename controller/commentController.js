const Post = require("../model/view/postModel")
const Comment = require("../model/view/commentModel");

//define route Handler
exports.createCommentController = async (req, res) => {
    try {
        //fetch data from req body
        const { post, user, body } = req.body;
        //new comment object
        const comment = new Comment({
            post, user, body
        });
        //save new comment into db
        const savedComment = await comment.save();
        //find the post by id, add new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")
            .exec();

        res.json({
            post: updatedPost
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Error while creating comment"
        })
    }
}
