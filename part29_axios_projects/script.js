document.body.style.backgroundColor = "gray";

// # Axios
// Axios is a library to make HTTP requests

// # project 1: random cat fact generator
let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    let res = document.getElementById("para");
    res.innerText = await getFacts(); // we use async await in this because we need to wait a bit before axios figures stuff out
})

// # Using Axios
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url); 
        // this will directly parse and the json data without going through any hastle we can do this
        console.log("cat fact successful");
        return res.data.fact;
    } catch(err) {
        console.log("Error -", err);
        return "Error: not found facts"
    }
}

// # project 2: dog image generator
let btn2 = document.querySelector("#btn2");
let img2 = document.querySelector("#dogImg");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
    let link = await getLink();
    img2.setAttribute("src", link);
})


async function getLink() {
    try {
        let res = await axios.get(url2);
        console.log("dog image successful");
        return res.data.message;
    }
    catch(err) {
        console.log("Error -", err);
        return "Error, image not found";
    }
}

/* line 70
// # passing headers directly to API request
let url3 = "https://icanhazdadjoke.com"
async function getFacts2() {
    const config = {headers: {Accept : "application/json"}};
    // we need to create an object headers like this and another object Accept inside it
    try {
        let res = await axios.get(url3); // this line will get  html code
        console.log(res.data);

        let res2 = await axios.get(url3, config); 
        console.log(res2.data); // this will log normal code
    } catch(err) {
        console.log("Error -", err);
    }
}

getFacts2();
*/