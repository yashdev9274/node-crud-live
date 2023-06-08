const User = require('../models/user');

// CRUD Controleers

// get all users


exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users });
        })
        .catch(err => console.log(err));
}


//get user by id
exports.getUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ user: user });
        })
        .catch(err => console.log(err));
}