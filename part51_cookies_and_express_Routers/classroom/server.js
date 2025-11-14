const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hi im a response');
});

// Index - users
app.get("/users", (req, res) => {
    res.send("GET for users");
});



app.listen(3000, () => {
    console.log('server is listening on port 3000');
});