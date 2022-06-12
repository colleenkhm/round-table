const { Schema, model } = require('mongoose');
const Thought = model('Thought', ThoughtSchema);

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String
        // required
        // between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
        // getter method to format timestamp on query
    },
    username: {
        type: String
        // required
    },
    reactions: {
        // array of nested documents created with reaction schema
    }

    //Schema settings - create virtual called reactionCount that retrieves length of thought's reactions array field on query
})

module.exports = Thought;