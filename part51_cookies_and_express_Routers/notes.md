# Express Router:
Express Routers are a way to organize your express application such that our primary app.js file doesn't become bloated.

```js
const express = require('express');
const router = express.Router(); // creates new router object

module.exports = router;

// in app.js
const users = require('/routes/user.js');
app.use("/user", users); // every route starting with /user will trigger this middleware.
```

Note: use this to get :id from parent
```js
const router = express.Router({ mergeParams: true });
```

# *`Web Cookies`*:
It is a name value pair that stores some data for the browser to remember like user prefer dark mode on every login.  

```js
app.get('/getCookies', (req, res) => {
    res.cookie("greet", "hello");
    res.send('hello friends');
})
```
Once a cookie route is triggered the cookies stay even if we switch to a different route.

## Parsing cookies:
npm install cookie-parser

```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

## Signed cookie:
We do this so user cannot change cookie values in the browser inspect.
```js
app.use(cookieParser("mySecretPassword"));

app.get("/getSignedCookies", (req, res) => {
    res.cookie('made-in', 'india', { signed: true });
    let verifiedCookie = req.signedCookies;
    res.send(verifiedCookie);
});
```