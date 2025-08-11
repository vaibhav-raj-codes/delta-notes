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

// # api in JS
// api stands for application programming interface.

// more code