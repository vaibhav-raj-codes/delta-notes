const express = require('express');
const app = express();
const ExpressError = require('./ExpressError.js');

// making middleware -> send response
// app.use((req, res, next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     return next();
// });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token !== "giveAccess") {
        throw new ExpressError(401, "Access without token prohibited");
    } else {
        next();
    }
}

app.get('/api', checkToken, (req, res) => {
    res.send("This is a random api");
});

app.get('/', (req, res) => {
    res.send('This is my home page');
});

app.get('/api/random', (req, res) => {
    res.send('This is a random page');
});

app.get('/bruh', (req, res) => {
    abs = abs;
})

app.get('/admin', (req, res) => {
    throw new ExpressError(403, "Unauthorized Access");
})

app.use(( err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
})

// 404 No page found
app.use((req, res) => {
    res.status(404).send(`Error, Page not found`)
})

app.listen(8080, () => {
    console.log(`Listing on http://localhost:8080`);
});