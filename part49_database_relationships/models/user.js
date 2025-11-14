const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => { console.log("connection successful") }).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shitload');
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
            _id: false
        }
    ],
});

const User = mongoose.model('User', userSchema);

const something = async () => {
    let user1 = new User({
        username: "Sherlockholms",
        addresses: [
        { location: "india", city: "moscow" },
        { location: 'russia', city: 'mumbai' },
        { location: "usa", city: 'tokyo' }
        ]
    });
    user1.addresses.push({ location: 'china', city: 'area69' });
    let res = await User.deleteMany({});
    console.log(res);
    res = await user1.save();
    console.log(res);
}

something().catch(err => console.log(err));