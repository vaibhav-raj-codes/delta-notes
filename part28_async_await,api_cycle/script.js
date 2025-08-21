/* line 17
// # async functions
// this is a simple straight forward and shorter way of writing promises.
// async functions automatically return a promise
async function upload(data) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if(internetSpeed  > 5) {
        return "successfull";
    } else {
        throw "failure";
    }
} 

upload("I can achieve anything with patience and consistency").then((pass) => {
    console.log(pass, ":uploaded"); // output - successfull :uploaded
}).catch((fail) => console.log(fail, ":not uploaded")); // output - failure :not uploaded
*/

/* line 28
// # async arrow functon
let openPage = async (params) => {
    throw "404 not found";
} 

openPage("I need to persistent to achieve my dreams and goals.").catch((err) => {
    console.log("Error is:", err); // output- Error is: 404 not found
});
*/

/* line 52
// # await function
// await function holdes stops the code from running 
// until a particular piece of code is either resolved or rejected

// let us create an asynchronous function to demonstrate:
function doSomething() {
    return new Promise((resolve, reject) =>  {
        setTimeout(()=> {
            console.log("resolved situation");
            resolve("successfull");
        },2000);
    })  
}

async function myFunc() {
    await doSomething();
    doSomething(); // this function waits until last doSomething() is either resolved or rejected.
    doSomething();
}

myFunc();
*/

/* line 83
// # handling rejections in await using try and catch;
function execute() {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 10) + 1;
            if(randomNum > 5) {
                console.log("executed successfully.");
                resolved();
            } 
            else rejected("rejected case");
            
        }, 1000);
    })
}

async function setter() {
    try{
        await execute(); // output- executed successfully.
    }
    catch(err) {
        console.log(err, "is the error"); // output- rejected case is the error.
    }

    console.log("now this line will be printed even if the previous await was rejected."); 
    // this line is now printed without giving errors.
}

setter();
*/

/* line 92
// # api in JS
// api stands for application programming interface.
// api request and recieve data in json format
// Note: values allowed in json data: object, array, string, number, "true", "false", "null"
// Note: all keys are strings in json, so to access them we need "keyName"
// https://jsonlint.com can be used to check json syntax validity
*/

/* line 104
// # JSON.parse() method in JS
// to parse a string data into a JS object
// json data is sent as a string so we need to parse the data to read it, which can be done using this method
let jsonResponse = `{"fact":"Approximately 1\/3 of cat owners think their pets are able to read their minds.","length":78}`
console.log(jsonResponse); // outputs a string and jsonResponse.fact is invalid

// using JSON.parse(data) we can convert the json string to a parsed js object, now we can do thing like parsedData.fact;
let parsedResponse = JSON.parse(jsonResponse);
console.log(parsedResponse.fact); 
*/   

/* line 115
// # JSON.stringify(json) method in js
// to parse a JS object data into JSON
// we use this when making our own APIs
let student = {name: "dude", age: 69, human: true};
console.log(student);

let jsonConvert = JSON.stringify(student);
console.log(jsonConvert); // outputs a string
*/

// # NOTE: tools for testing API requests- hoppscoth or postman

/* line 138
// # fetch(url) - javascript method to send API requests
let url = "https://catfact.ninja/fact";
// in the networks tab after inspecting we can notice this fetch requests
// NOTE: fetch(url) returns a promise to us
fetch(url)
    .then((res) => {
        console.log("Success -", res);
        newPromise = res.json();
        // this step parses the res.json promise and returns another promise which has the proper json data
        newPromise
            .then((data) => {
                console.log(data.fact); // this will finally print the catfact that the api sent
            })
            // here data object has 2 keys fact and length so we used data.fact to access only value inside fact
    })
    .catch((err) => {   
        console.log("ERROR -", err);  
    });
*/

/* line 154
// # shorter hand way of writing the same code above
let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        console.log("Success -", res);
        return res.json();
    })
    .then((data)=> { // this is trggered if above .then() is successful
        console.log(data.fact);
    })
    .catch((err) => {   
        console.log("ERROR -", err);  
    });
*/

/* line 173
// # using async and await on api request response cycle
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        console.log(res); // now this line will wait to print res until above line is excecuted
        let data = await res.json();
        console.log(data.fact);
    }
    catch(err) {
        console.log("Error -", err);
    }
}

getFacts();
*/