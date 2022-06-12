const { Schema, model } = require('mongoose');
const User = model('User', UserSchema);

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //must match valid email address (google mongoose matching validation)
    },
    thoughts: {
        // id: []
        // array of id values referencing thought model
    },
    friends: {
        // array of id values referencing user model (self-reference)
    }

    //Schema Settings
    // create virtual called friendCount that retrieves length of user's friends array field on query
});

module.exports = User;