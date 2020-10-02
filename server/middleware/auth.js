const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    const token = req.header('abc-auth-token');

    if (!token) return res.status(400).json({ msg: 'No token, authorization denied' });

    try {
        jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
            if (error) {
                res.status(400).json({ msg: 'Token is not valid' });
            } else {
                req.user = decoded.user_xxx;
                console.log('3 ... USERNAME: ', req.user.name);
                next();
            }
        });
    } catch (err) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};