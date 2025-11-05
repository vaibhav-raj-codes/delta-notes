const mongoose = require('mongoose');

const listngSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    image: {
        filename: {
            type: String
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/a-house-with-a-lot-of-windows-with-the-lights-on-at-night-VqJUR1YDEK0",
            set: (v) => 
                v === "" 
                ? "https://unsplash.com/photos/a-house-with-a-lot-of-windows-with-the-lights-on-at-night-VqJUR1YDEK0" 
                : v
        },
    },
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listngSchema)
module.exports = Listing;