# how to use express
const express = require('express');
const app = express();
const port = 3000;


# port 
ports are logical endpoints of a network connection which we can use to exchange information between client and server

# listening for a request: 
index.js ->
app.listen(port, () = {
    // do something
})

bash ->
node index.js 
// starts listening 

// here the app starts listening for a request when we run localhost:3000

# sending a request -> app.use():
app.use((req, res) => {
    console.dir(req);
})

// by default use callback comes with a request and recieve which we can use to perform some action.

## sending a response -> we use 2 objects request and recieve: 
app.use((req, res) => {
    // accessing the res object
    console.log(res); 
    // will print several things present in res

    res.send("my response"); 
    // this is used to send a response
})

/* here what is going on is that we are sending data in several possible ways like an html, object or string and express will send it to the server in JSON or HTML format */

// res.send() is a very versatile method because we can send several things like html enclosed in a tag or js objects or strings.

// note: html in res.send() is sent within quotes like
// "<h1>This is my heading</h1><hr><p>This is my paragraph</p>"


## routing
when we use a website ex: amazon/books or amazon/toys, here we are accessing two routes.
similarly in our large website we can make different routes from our root and lead the user there and show whatever response we want to

note: when using routing don't use app.use() because it will send a response and overwrite everything else. Even if we have an empty app.use() without any res.send() it will still make the  website keep loading without showing anything.

## methods for routing -> app.get():
# app.get('/', ()) has 2 attributes 1:- route and the other is our callback:
app.get("/apple", (req, res) => {
    res.send({
        color: "red"
    });
});

// localhost:8080/apple will get us this object in json form.

# when user searches for a route that is not present
// we can use something like app.use() at the end to redirect the client to a page we want
app.use((req, res) => {
    res.send({
        value: "Not a valid route"
    });
});


# Nodemon:
nodemon is a tool which we can use to avoid restarting servers and make it automatic.  

i installed it globally withh npm install -g nodemon

to use nodemon just use 

bash: 
nodemon filename.js

# Restart nodemon:
bash:
rs

# Running nodemon locally:
bash:
npx nodemon filename.js

# Path parameters in express:
instead of writing a seperate route for everything such as individual accounts in social media we can initialize a variable to it called path parameter

let username = "normie";
app.get('/user/:username', (req, res) => {
    console.log(req.params); 
    // bash op: [Object: null prototype] { username: 'normie' }

    res.send(`The username is ${username}`);
    // op on website: The username is normie
});


note: here req.params stores all the parameters we pass. :username is the variable

# accessing path parameters:
app.get('/:username/:id', (req, res) => {
    let {id, username} = req.params;
    res.send(`The username is ${username} and ${id}`);
});

op: for /vampire/6969 -> The username is vampire and 6969

# query strings:
we can send query inside the same route using 
?q=something

app.get('/search', (req, res) => {
    let query = req.query.q;
    res.send(`no response for query ${query}`);
})

for /search?q=dogs 
we get o/p:  no response for query dogs

# send multiple queries
?animal=dogs&color=brown

app.get('/search', (req, res) => {
    let {animal, color} = req.query;
    res.send(`You asked for animal ${animal} of color ${color}`)
})

