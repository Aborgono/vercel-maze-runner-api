
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    difficulty: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
    }
})
