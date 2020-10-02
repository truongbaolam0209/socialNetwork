const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Comment = require('../../models/Comment');

// @route    COMMENT api/auth
// @desc     COMMENT ...............................
// @access   Public
router.post(
    '/:id',
    [
        auth,
        [
            check('comment', 'Please include a valid email').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


        const { postId, comment } = req.body;

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newComment = new Comment({
                postId,
                comment,
                userId: user.id,
                name: user.name,
                avatar: user.avatar
            });

            await newComment.save();

            res.json(newComment);

        } catch (err) {
            res.status(500).send('Server error !!!');
        }
    }
);



router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        
        const comments = await Comment.find({ postId: req.params.id });
        
        res.json(comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;