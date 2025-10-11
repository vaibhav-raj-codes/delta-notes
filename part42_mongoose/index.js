const mongoose = require('mongoose');
const { use } = require('react');

main().then((res) => console.log(`Connection Successful`))
.catch((err) => console.log(err)); 
// running the main() function and checking for errors or results.

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    cgpa: Number,
    branch: String,
});

const Student = mongoose.model("Student", userSchema); 
