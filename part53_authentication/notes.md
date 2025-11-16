# Passport library:
It helps us in authentication

npm i passport // for getting the passport library  

npm i passport-local // for authentication with username and password locally  
npm i passport-local-mongoose  // makes using mongodb with passport easier for creating usernames and password.  

## Inside models/user.js:
```js
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
```

## Inside app.js:
```js
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

// creating a session
app.use(session(sessionOptions));
app.use(flash());

// using passport 
app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// saving a fake user:
app.get('/demouser', async (req, res) => {
    // passport already gives us a username
    let fakeUser = new User({
        email: 'student@gmail.com',
        username: 'delta-student'
    });

    await User.register(fakeUser, "password");
    // User.register(modelObject, "password");

    // NOTE: passport auto checks if username is unique
});
```
## Inside user.js:
```js
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');

// authenticating users
router.get('/login', (req, res) => {
    res.render("users/login.ejs")
});

router.post('/login',
    // This is important. passport automatically authenticates it and sends failure flash and redirects.
    passport.authenticate("local", {
        failureRedirect: '/login',
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success", "Welcome back");
        res.redirect('/listings');
    }
);

```