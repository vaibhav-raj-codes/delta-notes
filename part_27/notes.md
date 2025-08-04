# function call stack

Js stores it's function calls in a stack. where last in first out principle is used. Very useful when debugging.

Note: We can observe the call stack contents using the sources panel in browser inspect. There we can set brakepoints and then refresh page to observe and debug.

# nesting of callbacks => also known as callback hell
function changeColor(color, delay, nextCallback) {
    // this function changes the background color of our web page after each delay using function callback.
    setTimeout(() => {
        document.body.style.backgroundColor = `${color}`;
        if(nextCallback) { 
            // we use this if condition because the last color change doesn't have an arrow function(refer red).
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

# example of an asnchronous situation in javascript 
// our situation is asynchronous because our internet speed can vary our uploadData function speed. hence we use multiple callbacks which are nested. resulting in a callback hell.
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

# promises in javascript
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


