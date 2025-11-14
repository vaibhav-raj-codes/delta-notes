# _`Database Relationships`_:

### types of relationships:

1. one to one
2. one to few
3. one to many
4. many to many

## one too few:

We store the child document inside the parent document.

```js
    {
        _id: ObjectId("myid"),
        username: 'sherlockholmes',
        addresses: [
            { location: 'kyatsandra', city: 'mangaluru' },
            { location: 'todesandra', city: 'bangluru' }
        ],
        __v: 1
    }
```

## Approach 1: One to many:

```js
const orderSchema = new Schema({
    item: String,
    price: Number
})


const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            // use this to refer to order
            ref: 'Order'
        }
    ]
})

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", customerSchema)

// now we can push entire Order into Customer.orders and only the ObjectId will be recorded since it's. the only mentioned object.
```

op: 
{
  _id: new ObjectId('6914b5316ed8f68a7fe163cd'),
  name: 'Rahul Kumar',
  orders: [
    new ObjectId('6914afdc22f4f0770cb1d9dc'),
    new ObjectId('6914afdc22f4f0770cb1d9dd'),
    new ObjectId('6914afdc22f4f0770cb1d9de')
  ],
  __v: 0
}

## Approach 2: One to Many Populate:
we get the new ObjectId in the orders in above, If we want the entire object instead of the id we can use .populate() method to quickly get the object that was attached with that id.

```js 
const findCustomer = async () => {
    let res = Customer.find({}).populate('orders');
    // we mention we want to populate orders section with default data data.
    console.log(`res`);
}
```

NOTE: If we want only item in orders we can do populate("orders", "item") to get only items

op: 
```js
{
  _id: new ObjectId('6914b5316ed8f68a7fe163cd'),
  name: 'Rahul Kumar',
  orders: [
    {
      _id: new ObjectId('6914afdc22f4f0770cb1d9dc'),
      item: 'samosa',
      price: 15,
      __v: 0
    },
    {
      _id: new ObjectId('6914afdc22f4f0770cb1d9dd'),
      item: 'dudh peda',
      price: 34,
      __v: 0
    },
    {
      _id: new ObjectId('6914afdc22f4f0770cb1d9de'),
      item: 'chocolate',
      price: 70,
      __v: 0
    }
  ],
  __v: 0
}
```

## Approach 3: One to many: (One to millions)
When working on extremely large dbs like instagram where one user can make 1000s of posts.  
Here we Store a reference to parent document inside child.  

[Important Reading](https://www.mongodb.com/company/blog/mongodb/6-rules-of-thumb-for-mongodb-schema-design)


# Handling deletion using mongoose middlewares:
Suppose a user account is deleted, then we need to also delete all his/her posts. Hence we need a method to cascade the deletion process.  

we have 2 middlewares to handle deletion pre and post in mongoose. Pre middleware executes before query is performed and post is executed after query is performed.  

NOTE: keep in mind that findByIdAndDelete automatically triggers findOneAndDelete.  

```js
// between schema declaration and model creation.
customerSchema.pre("findOneAndDelete", async () => {
    console.log("pre middleware");
});

customerSchema.post("findOneAndDelete", async () => {
    console.log("post middleware");
});
```

```js
// to delete all orders associated with customer.
// between schema declaration and model creation.
customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let val = await Order.deleteMany({ _id : {$in: customer.orders } });
        console.log(val);
    }
});

// at the end performing some deletion process -> 
const delCust = async () => {
    let data = await Customer.findByIdAndDelete('6915689d083a14ea9c3b96be');
    console.log(data);
}
delCust().catch(err => console.log(err));
```

op:
pre middleware
connection successful
post middleware
{
  _id: new ObjectId('6915689d083a14ea9c3b96be'),
  name: 'karan johar',
  orders: [ new ObjectId('6915689d083a14ea9c3b96bf') ],
  __v: 0
}

