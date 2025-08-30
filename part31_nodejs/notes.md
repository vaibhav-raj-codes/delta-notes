# Running a js file with node
node "filename" -> runs the js code

.exit -> to exit node

# process
node -> to enter node
process -> after entering node to see all process information
process.version -> like this we can see specific part inside process like ex:version
process.cwd() -> see current working directory where node is working

# process.argv
process.argv function returns an array containing the command-line arguments passed when Node.js process was launched
 
node script.js // (In js file - console.log(process.argv))
output:
[
  '/usr/local/bin/node',
  '/Users/raj/Documents/delta-notes/part31_nodejs/script.js'
]

# sending arguments to the js file using process.argv
we can send arguments to the js file using process.argv

ex: 
script.js ->
console.log(process.argv);

terminal -> 
node script.js hello bye
[
  '/usr/local/bin/node',
  '/Users/raj/Documents/delta-notes/part31_nodejs/script.js',
  'hello',
  'bye'
]

# accessing process.argv inside js file
script.js ->
let args = process.argv;
// i = 2 because we ignore the first 2 default paths
for(let i = 2; i < args.length; i++) { 
    console.log("hello " + args[i]);
}

terminal ->
node script.js raj prabhu keerthan manoj guru affan akhyar 
hello raj
hello prabhu
hello keerthan
hello manoj
hello guru
hello affan
hello akhyar

## export data to other files 
# module.exports
export data to other files
# require() 
access data from other file

ex: 
math.js -> 

let sum = (a, b) => a + b;
let div = (a, b) => a / b;
const pi = 3.14;
const g = 9.8;

let myObj = {
    add : sum,
    divide : div,
    G : g,
    PI : pi
};

console.log(myObj);

module.exports = myObj; // sending myObj to whomever requests it

script.js ->

const mathData = require("./math");
console.log(mathData);

op from script.js ->
{ add: [Function: sum], divide: [Function: div], G: 9.8, PI: 3.14 }
{ add: [Function: sum], divide: [Function: div], G: 9.8, PI: 3.14 }

# additional methods to export module
module.exports.sum = (a, b) => a + b;
module.exports.div = (a, b) => a / b;
// directly exports both sum and div

or 

exports.sum = (a, b) => a + b;
exports.div = (a, b) => a / b;

or

module.exports = {
    sum: sum,
    div: div,
}

## module.export an entire directory
# step 1: make an index.js inside the directory

# step 2: make module.exports for each file inside the directory
ex: 
fruits -> apple.js ->
module.exports = {
    name: "apple",
};
fruits -> mango.js -> 
module.exports = {
    name: "mango",
};
fruits -> index.js ->
const apple = require(./apple);
const mango = require(./mango);

module.exports = [apple, mango]
// exports both apple and mango

# step 3: require the data from required directory 
ex: 
script.js ->
const myfruit = require(./fruits);
console.log(myfruit);

op script.js ->
[
    {name: 'apple'},
    {name: 'mango'},
]


## NPM (Node Package Manager)
NPM is the standard package manager for Node.js

It is like a library of packages

# Installing packages using npm
npm install <- package name ->