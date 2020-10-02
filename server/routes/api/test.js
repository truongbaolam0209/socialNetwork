const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const allUser = await User.find();

        if (!allUser) return res.status(400).json({ msg: 'Unable to retrieve all user data' });
        res.json(allUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;