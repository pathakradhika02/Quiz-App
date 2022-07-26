const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    option1: {
        type: String,
        required: true,
        trim: true 
    },
    option2: {
        type: String,
        required: true,
        trim: true 
    },
    option3: {
        type: String,
        required: true,
        trim: true 
    },
    option4: {
        type: String,
        required: true,
        trim: true 
    },
    rightOption:{
        type: [String],
        required: true
    },
    difficulty : {
        type: Number,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('question', questionSchema)