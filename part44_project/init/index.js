const mongoose = require('mongoose');
const initData = require('./data.js');
const listingDB = require('../models/listing.js');

main().then(res => console.log('Connected to mongoDB')).catch(err => console.log(err));
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

const initDB = async () => {
    await listingDB.deleteMany({});
    await listingDB.insertMany(initData.data);
    console.log('inserting of data was successful');
}

initDB();