/* line 8
// # accessing process.argv
let args = process.argv;
// i = 2 because we ignore the first 2 default paths
for(let i = 2; i < args.length; i++) { 
    console.log("hello " + args[i]);
}
*/

/* line 14
// accessing data from math.js file
const mathData = require("./math");
console.log(mathData);
*/ 


import {sum, div} from "./math.js"
console.log(sum(2, 4));