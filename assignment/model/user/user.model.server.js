var mongoose = require('mongoose');
var userSchema = require('user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}