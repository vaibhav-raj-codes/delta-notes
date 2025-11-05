const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
const listingDB = require('./models/listing.js');

main().then(res => console.log('Connected to mongoDB')).catch(err => console.log(err));
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/test', async (req, res) => {
    let sampleListing = new listingDB({
        title: 'myhome',
        description: 'by the beach',
        price: 1234,
        location: 'banglore',
        country: 'india'
    });
    let result;
    // await sampleListing.save().then(res => {
    //     result = res;
    // }).catch (err => console.log(err));
    res.send(result); 
})  

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});