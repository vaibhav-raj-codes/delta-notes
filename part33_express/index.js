const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Request recieved at ${port}`);
});

app.get('/help', (req, res) => {
    res.send("This is the help section");
});

app.get('/info', (req, res) => {
    res.send("This is the Info section");
})

app.get('/:username/:id', (req, res) => {
    let {id, username} = req.params;
    res.send(`The username is ${username} and ${id}`);
});

app.get('/search', (req, res) => {
    let {animal, color} = req.query;
    console.log(animal, color);
    if (!animal || !color) {
        res.send(`No results for your query!`);
    }
    res.send(`You asked for animal ${animal} of color ${color}`);
});

app.use('/', (req, res) => {
    res.send("This is a basic response");
}); 