## Get and Post request:
# GET request:
In GET request data is sent in query strings and is visible in url and url can't exceed specific length or the browser will reject it. Also since the url is publically visible it is not safe to send sensitive information such as passwords and usernames.

# Using get in html to send requests:
<form method="get"></form>

# POST request:
In post request data is sent via request body (any type of data). It is used to post something (for Create/ Write/ Update)

![alt text](./assets/get%20and%20post.png)

# accessing data from post reqest:
// we use a middle ware to set for all requests for app
// basically telling if express get any encoded url then automatically parse it.
app.use(express.urlencoded({ extended: true }));

// telling express to also parse JSON data
app.use(express.json());

app.post((req, res) => {
    // all the data is coming from the req.body. But express can't read it, so we need to parse it.
    req.body;
})

## Javascript OOPs:
# Object prototypes:
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

It is like a single template object that all objects inherit methods and properties from without having their own copy.
ex: all arrays have a prototype(which itself is an object) but it is not visible unless specifically called.

# Accessing prototype:
arr.__proto__ (only for reference)

Array.prototype (actual object which has all the array related prototype)

String.prototype (actual object which has all the string related prototype)

# method 1: Factory functions:
// here we create a function that returns objects, but takes up more space(because same copy of the function is made for every object we make with this function):

function student(name, year) {
    let student = {
        name: name,
        year: year,
        printInfo() {
            console.log(`Student name: ${this.name} studying in year: ${this.year}`);
        }
    }

    return student;
}


let akash = student("bob", 3);

# method 2: Js constructors:
using the new keyword we can create instance of a user-defined object type.

ex: 
// here we create a constructor to initialize values
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// note: above function cannot have methods, so doing person.doSomething() will not work, to achieve it we use the method below.

// we create functions that any object of type person can access
Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
}

// here we create an instance of an object using the new keyword:
let myPerson = new Person("robin", 32);

// calling the object
console.log(`Person name is ${myPerson.name}`);
myPerson.talk();

op: 
Person name is robin
Hi, my name is robin

# method 3: Classes:
Classes are a template for creating objects 

The constructor method is a special method of a class for creating and initializing an object instance of the class.

classes let us create both initialization and method creation inside a single block instead of changing an object's prototype

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Person name is ${this.name} and age is ${this.age}`);
    }
}

let akash = new Person("akash", 69);
akash.talk();

## Inhertance in js:
// using class something extends parent{} we can inherit data and methods from parent class.
// using super keyword we can access data from parent class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} is talking`)
    }
}

class Student extends Person{
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }
}

let harshad = new Student("harshad", 22, 6.9);
harshad.talk();

op: harshad is talking

# Method overriding:
// To method override just write the same function in child class and change it to your liking
ex:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} is talking`)
    }
}

class Student extends Person{
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }
    talk() {
        console.log(`${this.name} is eating`)
    }
}

let harshad = new Student("harshad", 22, 6.9);
harshad.talk();

op: harshad is eating
