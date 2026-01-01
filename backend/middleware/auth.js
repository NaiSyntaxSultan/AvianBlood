const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        // code
        const token = req.headers['authtoken'];
        if(!token) {
            return res.status(401).json({
                message: 'No token'
            });
        }
        const decoded = jwt.verify(token, 'jwtsecret');
        req.user = decoded.user;
        next();
    } catch (err) {
        // code
        console.log(err);
        res.status(500).json({
            message: 'Token Invalid'
        });
    }
}