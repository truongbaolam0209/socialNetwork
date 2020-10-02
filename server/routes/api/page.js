const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Post = require('../../models/Post');
const auth = require('../../middleware/auth');

router.get('/:id', async (req, res) => {
    try {

        const user = await User.findById(req.params.id);
        const posts = await Post.find({ user: req.params.id });

        res.json({ user, posts });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




module.exports = router;