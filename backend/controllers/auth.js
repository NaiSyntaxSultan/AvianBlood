
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    try {
        // code

        // Check User
        const { username, email, password } = req.body;

        const user = await User.findOne({ email });
        // Encrypt

        // Save
        res.send(req.body);
    } catch (err) {
        // code
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.loginUser = async (req, res) => {
    res.send('User logged in');
}