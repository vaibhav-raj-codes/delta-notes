const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("mySecretPassword"));

app.get("/getSignedCookies", (req, res) => {
    res.cookie('made-in', 'india', { signed: true });
    let verifiedCookie = req.signedCookies;
    res.send(verifiedCookie);
});

app.get("/getCookies", (req, res) => {
    res.cookie("name", "bob");
    res.send('hello my friends');
});

app.get('/', (req, res) => {
    let value = req.cookies;
    console.log(req.cookies)
    res.send(req.cookies);
})

app.listen(3000, () => {
    console.log('listing on port 3000');
})