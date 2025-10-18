const express = require('express')
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('node:path')

app.use("views", path.join(__dirname, "views"))
app.use("view engine", "ejs"); 

main().then(() => console.log('connection to mongodb successful')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello world")
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})