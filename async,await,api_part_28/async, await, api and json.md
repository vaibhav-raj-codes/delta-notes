# async functions
// this is a simple straight forward and shorter way of writing promises.
// async functions automatically return a promise
async function upload(data) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if(internetSpeed  > 5) {
        return "successfull";
    } else {
        throw "failure"; // throw is when rejected, in that case error is thrown.
    }
} 

upload("I can achieve anything with patience and consistency").then((result) => {
    console.log(result, ":uploaded"); // output - successfull :uploaded
}).catch((error) => console.log(error, ":not uploaded")); // output - failure :not uploaded

# async arrow functon
let openPage = async (params) => {
    throw "404 not found";
} 

openPage("I need to persistent to achieve my dreams and goals.").catch((err) => {
    console.log("Error is:", err); // output- Error is: 404 not found
});

# await function
// await function holdes stops the code from running 
// until a particular piece of code is either resolved or rejected
// NOTE: await can only be used in an async function.

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

# handling rejections in await using try and catch;
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

# api in JS
// api stands for application programming interface.
// api request and recieve data in json format (xml in older software)
// Note: values allowed in json data: object, array, string, number, "true", "false", "null"
// Note: all keys are strings in json, so to access them we need "keyName"
// https://jsonlint.com can be used to check json syntax validity

# JSON.parse() in JS
// json data is sent as a string so we need to parse the data to read it, which can be done using this method
let jsonResponse = `{"fact":"Approximately 1\/3 of cat owners think their pets are able to read their minds.","length":78}`
console.log(jsonResponse); // jsonResponse.fact is invalid
// using JSON.parse(data) we can convert the json string to a parsed js object, now we can do thing like parsedData.fact;
let parsedResponse = JSON.parse(jsonResponse);
console.log(parsedResponse.fact); 

# JSON.stringify(json) method in js
// to parse a JS object data into JSON
// we use this when making our own APIs
let student = {name: "dude", age: 69, human: true};
console.log(student);

let jsonConvert = JSON.stringify(student);
console.log(jsonConvert); // outputs a string

# tools for testing API requests- hoppscotch or postman

# AJAX - asynchronous javascript and xml
// this is the entire process through which api is called and in response we recieve data. All of this happens asynchronously.

# https verbs- example: GET, POST, DELETE
// we use this in hoppscotch
// get request is used when we want to get/ recieve some data.
// post request is when we want to post/ send something with our api request
// delete request is when we want to delete 

// NOTE: for now in the clint side/ front end we will only focus on the get request and look at the remaining in later sections.

# status codes in hoppscotch
// 200 - OK
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error
// for more status codes visit- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

# add additional information in URLs using tools like hoppscotch
# 1: using query strings
// in url: https://www.google.com/search?q=harry+potter&q=courses
// here q is key and harry+potter is value, &q is again a key and courses is a value

// like this we can add additional information in our api requests

# 2: using variables
// ex: https://api.potterdb.com is an api 
// adding https://api.potterdb.com/v1/movies will bring up all the movies
// :id or {{id}} or <id> are all variables. we can use this to bring up a specific movie out of this api
// we can copy any :id after visiting https://api.potterdb.com/v1/movies and if we replace the value such that https://api.potterdb.com/v1/movies/:id (the :id value) then we can access that specific movie
// ex: https://api.potterdb.com/v1/movies/406c41c1-babd-4ead-9567-9783c1742d39

// NOTE: one good thing about api is if i use something like /search?q=indian+university&q=dubai then it will ignore dubai if not found any data and only show us the indian+university part that it found

# 3: Http headers inside hoppscotch
// step 1: get the api request and send it
// step 2: inside the headers for client side we can add any headers inside it
// step 3: for key add Accept and for value we can add application/json(for accepting json response) or text/html(for accepting html response) or text/plain(for accepting plain text response)

// NOTE: we can use headers to send metadata(data about a data)

# fetch(url) - javascript method to send API requests
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

# shorter hand way of writing the same code above
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

# using async and await on api request response cycle
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