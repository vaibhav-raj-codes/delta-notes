const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { listingSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const listingDB = require('../models/listing.js');

const validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el) => el.message).join(",");
        console.log(result);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

// home or landing page
router.get('/', async (req, res) => {
    const fullData = await listingDB.find({});
    res.render('listings/index.ejs', { list: fullData });
});

// Create route
router.post('/', validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new listingDB(req.body.listing);
    await newListing.save();
    req.flash('success', 'New listing created!');
    res.redirect('/listings');
}));

router.get('/new', (req, res) => {
    res.render('listings/new.ejs');
});

// delete route:
router.delete('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await listingDB.findByIdAndDelete(id);
    req.flash('success', 'Listing deleted');
    res.redirect('/listings');
}));

// edit route: 
router.get('/:id/edit', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const fullData = await listingDB.findById(id);
    if (!fullData) {
        req.flash("error", "Listing not found");
        res.redirect('/listings');
    } else {
        res.render('listings/edit.ejs', { item: fullData });
    }
}));

// update route:
router.put('/:id', validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const fullData = req.body.listing;
    await listingDB.findByIdAndUpdate(id, { ...fullData });
    req.flash('success', 'Listing updated!');
    res.redirect(`/listings/${id}`);
}));

// show listing, get id to display hotel info
router.get('/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const fullData = await listingDB.findById(id).populate('reviews');
    if (!fullData) {
        req.flash("error", "Listing not found");
        res.redirect('/listings');
    } else {
        res.render('listings/show.ejs', { item: fullData });
    }
}));

module.exports = router;