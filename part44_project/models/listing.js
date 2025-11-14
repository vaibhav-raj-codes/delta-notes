const mongoose = require('mongoose');
const { Schema } = mongoose;
const reviewDB = require('./review.js');

const listingSchema = new mongoose.Schema({
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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await reviewDB.deleteMany({_id: {$in: listing.reviews}});
    }
})

const Listing = mongoose.model('Listing', listingSchema)
module.exports = Listing;