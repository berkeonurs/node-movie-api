const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      maxlength: 15,
      minlength: 2,
      unique: true,
      required: true
    },
    password: {
        type: String,
        minlength: 5
    }
});

module.exports = mongoose.model('user',UserSchema);