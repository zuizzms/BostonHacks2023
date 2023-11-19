const mongoose = require("mongoose")

const Schema = mongoose.Schema

const gymSchema = new Schema({
    gymName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numRatings: {
        type: Number,
        required: true
    },
    lgbtRating: {
        type: Number,
        required: true
    },
    genderRating: {
        type: Number,
        required: true
    },
    ageRating: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Gym', gymSchema)