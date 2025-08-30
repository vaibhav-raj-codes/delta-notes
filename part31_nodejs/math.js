/* line 18
// passing values from math.js to other files 
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

module.exports = myObj;
*/

const sum = (a, b) => a + b;
const div = (a, b) => a / b;
export let stuff = [sum, div]
