const setupApp = require('./expressSetup.js')
const port = 8080;
const mongoose = require('mongoose');
const chat = require('./models/chat.js')
const app = setupApp();

main().then(() => console.log('connection to mongodb successful')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

// all chat route or main page
app.get('/chats', async (req, res) => {
    let myChats =  await chat.find(); 
    res.render('index', {myChats})
});

// get the forms route
app.get('/chats/new', (req, res) => {
    res.render('new')
})

// post the form data to index route
app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new chat({
        from: from,
        to: to, 
        msg: msg,
        created_at: new Date()
    })
    newChat.save().then(console.log("chat was saved")).catch(err => console.log(err));
    res.redirect('/chats')
})

// Edit route:
app.get('/chats/:id/edit', async (req, res) => {
    let {id} = req.params;
    let Chat = await chat.findById(id);
    res.render('edit.ejs', { Chat });
});

app.put('/chats/:id', (req, res) => {
    let { id, msg } = req.body;
    chat.findByIdAndUpdate({id}, {msg}).then(console.log("successfully updated")).catch(err => console.log(err));
})

// index route
app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

// monkeytype is pretty fast you know