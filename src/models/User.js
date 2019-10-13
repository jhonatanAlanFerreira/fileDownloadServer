let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);
