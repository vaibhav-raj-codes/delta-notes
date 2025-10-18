const mongoose = require('mongoose');

main()
    .then(res => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// making my own schema
const employeeSchema = new mongoose.Schema({
    name: String,
    work_experience: [{ body: String, date: Date }],
    extras: {
        hobbies: String,
        salary: Number
    }
});



const Employee = mongoose.model("Employee", employeeSchema)

async function doit(){
     const found = await Employee.deleteMany({name: 'chaitanya'})
    console.log("deleted:", found)
}

Module.findByIdAndUpdate("myid", {type: Number}, {runValidators: true})