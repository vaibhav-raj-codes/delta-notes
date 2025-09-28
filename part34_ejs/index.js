const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const instaData = require("./assets/data.json");
console.log(instaData);

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`listening on https//localhost:${port}`);
});

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/random', (req, res) => {
    let data = Math.floor(Math.random() * 6 + 1);
    res.render("random", {data});
})

app.get('/ig/:username', (req, res) => {
    let {username} = req.params;
    let data = instaData[username];
    if(data) {
        res.render("insta", { data});
    } else {
        res.send('no results found');
    }
});




