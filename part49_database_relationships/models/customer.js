const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => { console.log("connection successful") }).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shitload');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("pre middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let val = await Order.deleteMany({ _id : {$in: customer.orders } });
        console.log(val);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });

    let order1 = await Order.findOne({ item: 'samosa' });
    let order2 = await Order.findOne({ item: 'dudh peda' });
    let order3 = await Order.findOne({ item: 'chocolate' });
    await cust1.orders.push(order1);
    await cust1.orders.push(order2);
    await cust1.orders.push(order3);

    let res = await cust1.save();
}
// addCustomer().catch(err => {console.log(err)});

const getCustomer = async () => {
    let res = await Customer.find({}).populate('orders');
    console.log(res[0]);
}

// getCustomer();

const addOrders = async () => {
    Order.insertMany([
        { item: 'samosa', price: 15 },
        { item: 'dudh peda', price: 34 },
        { item: 'chocolate', price: 70 },
    ]);
}

// addOrders().catch(err => console.log(err));


// add customer
const newCustomer = async() => {
    let newCust = new Customer({
        name: "karan johar"
    });
    
    let newOrder = new Order({
        item: 'pizza',
        price: 240
    });

    newCust.orders.push(newOrder);
    await Customer.deleteMany({});
    await Order.deleteMany({});
    console.log(`deleted data`)
    await newOrder.save();
    await newCust.save();

    console.log(`pushing data successful`);
}


const delCust = async () => {
    let data = await Customer.findByIdAndDelete('69156b0157aa3a638751c421');
    console.log(data);
}

// newCustomer().catch(err => console.log(err));

delCust().catch(err => console.log(err));
