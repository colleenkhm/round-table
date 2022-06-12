const { Schema, model } = require('mongoose');
const User = model('User', UserSchema);

const UserSchema = new Schema ({
    username: {
        type: String,
        //unique
        //required
        //trimmed
    },
    email: {
        type: String,
        //required
        //unique
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