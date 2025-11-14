const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const { reviewSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const listingDB = require('../models/listing.js');
const reviewDB = require('../models/review.js');

const reviewListing = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    if (result.error) {
        let errMsg = result.error.details.map((el) => el.message).join(",");
        console.log(result);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

// Reviews
// post review Route
router.post('/', reviewListing, wrapAsync(async (req, res) => {
    let listing = await listingDB.findById(req.params.id);
    let newReview = new reviewDB(req.body.review);
    listing.reviews.push(newReview);

    let ans = await newReview.save();
    ans = await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

// Delete review route 
router.delete('/:reviewId', wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await listingDB.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await reviewDB.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}))

module.exports = router;