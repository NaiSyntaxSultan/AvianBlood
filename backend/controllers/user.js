exports.list = async (req, res) => {
    try {
        // code
        res.send('Hello Controller List!');
    } catch (err) {
        // error
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.read = async (req, res) => {
    res.send('Hello Controller Read!');
}

exports.create = async (req, res) => {
    try {
        // code
        res.send('User created from controller!');
    } catch (err) {
        // error
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.update = async (req, res) => {
    try {
        // code
        res.send('User updated from controller!');
    } catch (err) {
        // error
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.remove = async (req, res) => {
    try {
        // code
        res.send('User deleted from controller!');
    } catch (err) {
        // error
        console.log(err);
        res.status(500).send('Server Error');
    }
}