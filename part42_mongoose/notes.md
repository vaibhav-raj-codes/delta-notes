## Mongoose:
mongoose is a library that creates a connection between MongoDB and Node.js Javascript Runtime Environment

It is an ODM (Object Data Modeling) Library.

# Installing mongoose:
npm i mongoose

# Boilerplate to use mongoose:
const mongoose = require('mongoose');  

# Connecting to mongodb:
mongoose.connect('mongodb://127.0.0.1:27017/test');  
// this line returns a promise so we use it in a async function like below

``` js
main().then((res) => console.log("connection successful"))
.catch((err) => console.log(err)); 
// running the main() function and checking for errors or results.

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
```
# Schema for our collections:
Schema defines the shape of the documents within that collection.

We can quickly make a overall structure for our collections like below:  
```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
```

[check all the schema types allowed in mongoose](https://mongoosejs.com/docs/guide.html)

# Model for constructing documents in collections:
Model in mongoose is a class with which we construct documents.
```js
const User = mongoose.model("User", userSchema);
```

