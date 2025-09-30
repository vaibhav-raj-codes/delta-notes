const express = require('express')
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4} = require('uuid');


// setting up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

// settings up view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Index Route - to GET all posts
let posts = [
    {
        id: uuidv4(),
        username: "raj",
        content: "I want to make money and build useful things.",
    },
    {
        id: uuidv4(),
        username: "vampire",
        content: "I want to become recognised and respected.",
    },
    {
        id: uuidv4(),
        username: "normie",
        content: "I want to live comfortably and find happiness.",
    },
    {
        id: uuidv4(),
        username: "future",
        content: "I want to fix the problems of this world to achieve my imaginations.",
    },

];

app.get('/posts', (req, res) => {
    res.render("index", { posts });
});

// Post route to add a new post. we create two posts GET /posts/new to serve the form and POST /posts to add the new post
app.get('/posts/new', (req, res) => {
    res.render("form"); 
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ username, content, id }    );
    res.redirect("/posts");
});

// show route to get one post using id, GET /posts/:id
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((temp) => id === temp.id)
    res.render("show", {post});
});

// Code to update a specific post, PATCH /posts/:id
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((temp) => id === temp.id);
    post.content = newContent;
    res.send('patch request working');
})

// app listening at port
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
