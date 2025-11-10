const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
const listingDB = require('./models/listing.js');
const path = require('path');
const { execPath } = require('process');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', ejsMate);


main().then(res => console.log('Connected to mongoDB')).catch(err => console.log(err));
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// home or landing page
app.get('/listings', async (req, res) => {
    const fullData = await listingDB.find({});
    res.render('listings/index.ejs', { list: fullData });
});

// Create route
app.post('/listings', async (req, res) => {
    const newListing = new listingDB(req.body.listing);
    try {
        await newListing.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/listings');
});

app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
});

// delete route:
app.delete('/listings/:id', async (req, res) => {
    const { id } = req.params;
    await listingDB.findByIdAndDelete(id);
    res.redirect('/listings');
});

// edit route: 
app.get('/listings/:id/edit', async (req, res) => {
    let { id } = req.params;
    const fullData = await listingDB.findById(id);
    res.render('listings/edit.ejs', { item: fullData });
});

// update route:
app.put('/listings/:id', async (req, res) => {
    let { id } = req.params;
    const fullData = req.body.listing;
    await listingDB.findByIdAndUpdate(id, {...fullData});
    res.redirect(`/listings/${id}`);
});

// get id to display hotel info
app.get('/listings/:id', async (req, res) => {
    let { id } = req.params;
    const fullData = await listingDB.findById(id);
    res.render('listings/show.ejs', { item: fullData });
});

// redirect to home page
app.get('/', async (req, res) => {
    res.redirect('/listings');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});