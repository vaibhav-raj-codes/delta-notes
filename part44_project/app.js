const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const listings = require('./routes/listing.js');
const reviews = require('./routes/reviews.js');
const session = require('express-session')
const flash = require('connect-flash');

const sessionOptions = {
    // this secret code is used to access our cookie.
    secret: "mycode",
    // resave and save uninitialized must be set to their values to avoid deprecated code
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
        // sets expires date.
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // set max possible age of a cookie, by default it is until session expires.
        httpOnly: true
        // prevents cross scripting attacks by hackers.
    }
};

main().then(res => console.log('Connected to mongoDB')).catch(err => console.log(err));
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(session(sessionOptions));
app.use(flash());

app.engine('ejs', ejsMate);

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/listings', listings);
app.use('/listings/:id/reviews', reviews);

// redirect to home page
app.get('/', wrapAsync(async (req, res) => {
    res.redirect('/listings');
}));

app.use((req, res, next) => {
    next(new ExpressError(404, 'Page Not Found'));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});