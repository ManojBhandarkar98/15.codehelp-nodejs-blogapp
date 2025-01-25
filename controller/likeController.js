const Post = require("../model/view/postModel")
const Comment = require("../model/view/commentModel");

//define route Handler
exports.likePost = async (req, res) => {
    try {
        //fetch data from req body
        const { post, user } = req.body;
        //new comment object
        const like = new Like({
            post, user
        });
        //save new comment into db
        const savedLike = await like.save();
        //find the post by id, add new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
        .populate("likes").exec();

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

//define route Handler
exports.dummyLink = (req, res) => {
    res.send("This is your dummy page");
}
