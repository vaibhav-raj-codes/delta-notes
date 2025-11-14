# `MIDDLEWARES`:
Middlewares in express are functions that come into play after the server recieves the request and before the response is sent to the client.  

## middlewares can:
1. execute any code. 
2. make changes to the request and response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.

## Next in Middlewares:
```js
app.use((req, res, next) => {
    console.log('middleware executed');
    next();
    console.log('This line is also executed');
});
```
This executes next middleware if current middleware doesn't end request-response cycle.

Ex:  
```js
// logger middleware
app.use((req, res, next) => {
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    return next();
});
```

Ex2:  
```js
// authentication with query tokens
app.use('/api', (req, res, next) => {
    let { token } = req.query;
    console.log(token);
    if(token !== "giveAccess") {
        res.status(404).send("Access without token prohibited");
    } else {
        next();
    }
})
```

## Sending middlewares as callbacks:
Ex:  
```js
// authentication with query tokens
const checkToken = (req, res, next) => {
    let { token } = req.query;
    console.log(token);
    if(token !== "giveAccess") {
        res.status(404).send("Access without token prohibited");
    } else {
        next();
    }
}

app.get('/api', checkToken, (req, res) => {
    res.send("This is a random api");
});
```

## Error handling middleware:
```js
app.get('/bruh', (req, res) => {
    abs = abs;
});

app.use(( err, req, res, next) => {
    console.log(`-----ERROR-----`);
    next(err);
});

app.use((req, res) => {
    res.status(404).send(`Error, Page not found`)
});

// op:
// ReferenceError: abs is not defined
```

Here if we don't use the next(err) it will only call the next non error handling middleware so the error message given by default error handler will not be called  

```js
// without calling next(err) and instead using next()
app.get('/bruh', (req, res) => {
    abs = abs;
});

app.use(( err, req, res, next) => {
    console.log(`-----ERROR-----`);
    next(err);
});

app.use((req, res) => {
    res.status(404).send(`Error, Page not found`)
});

// op:
// Error, Page not found
```

# *Better way for error Handling:*
## `Using classes`:
app.js:  
```js
app.get('/admin', (req, res) => {
    throw new ExpressError(403, "Unauthorized Access");
})

app.use(( err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred"} = err;
    // sets status and message with some default values in case there's an unrecognised error.
    res.status(status).send(message);
})
```

ExpressError.js:  
```js
class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;
```

# `Handling Async Errors`:
## async errors where id is nor invalid in dbs:
Express by default doesn't call the next() function when handling Asynchrnous errors, so simply throwing an error won't work  

`hence use next() explicitly:`  
```js
return next(new ExpressError(404, "Information not found"));
```

## async errors where validation error occurs:
we can fix this using try catch whenever doing something asynchronous  
```js
    try {
        let newChat = new chat ({
            from: 'prabhu',
            to: 'akash',
            message: 'hello akash bhaijan',
        });
        newChat.save();
    } catch(err) {
        next(err);
        // we call next here with the err
    }
```


# `Error handling with a custom asyncWrap function`:
we can make a function asyncWrap and make it return a executable function or next(err) function.

```js
function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}

app.get('/api/chats/:id', asyncWrap(async (req, res, next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render(show.ejs, { chat })
}))
```