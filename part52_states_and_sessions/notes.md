# States:
## Express Sessions:
An attempt to make our sessions stateful.  

npm i express-session.  

[official docs](https://www.npmjs.com/package/express-session)

app.use(session({ secret: 'topSecret', resave: false, saveUninitialized: true }));  

## Connect-flash messages:
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. It is generally used with redirects.  

npm i connect-flash  

```js
const flash = require('flash');
app.use(flash());

// to use flash
req.flash('success', 'user registered successfully!');
// success is the key for the message.

// to access flash message from another route using key
res.send(req.flash('success'));
```