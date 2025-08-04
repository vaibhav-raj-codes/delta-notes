/* line 50-
// # javascript call stack
function hello() {
    console.log("hello world");
    console.log("I am raj");
}

function callHello() {
    hello();
}

callHello();
// what happens here is
// callHello() -> hello() -> console.log()

// one more example for JS call stack:
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    return two() + one();
}

console.log(`${three()} is the answer.`);
// what happens is:
// three() -> {{two() -> {one() = 1 + one() = 1 -> 2}} + {one() = 1}}  => 3 


//# nesting of callbacks => also known as callback hell
function changeColor(color, delay, nextCallback) {
    setTimeout(() => {
        document.body.style.backgroundColor = `${color}`;
        if(nextCallback) {
            nextCallback();
        }
    }, delay);
}

changeColor("green", 2000, () => {
    changeColor("blue", 2000, () => {
        changeColor("red", 2000);
    })
})
// nesting of callbacks is a real challenge in programming.
*/

/* line 81
//# example of an asnchronous situation in javascript 
function uploadData(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if(internetSpeed > 5) {
        if(success) success(); // runs the success argument.
    } else {
        if(failure) failure(); // runs the failure argument.
    }
}

uploadData("I love coding", // arugment 1 i.e, data
    () => { // argument 2 i.e, success
        console.log("Your data was successfully uploaded."); 
        // since our first data was successfully saved in here we can proceed to saving our next data.
        uploadData("My second data to upload",
            () => {
                console.log("Your second data was stored successfully :)");
            },
            () => {
                console.log("Failed to upload second data :(");
            }
        );
    },
    () => { // argument 3 i.e, failure
        console.log("Failed to upload data.");
    }
); 
// we are basically sending uploadData(data in string, success in arrow function, failure in arrow function);    
*/ 

//# promises in javascript
function upload(data) { 
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);
        if(internetSpeed > 5) {
            resolve("sucessfully uploaded.");
        } else {
            reject("failed to upload.");
        }
    });
}
upload("uploading myData to cloud");
// we can now tackle this asynchronous sitation much more easily.
