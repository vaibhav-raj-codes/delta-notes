# Axios
// Axios is a library to make HTTP requests  
// NOTE: to include axios library use   
```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>  
```
above the <script.js> in html file.   
// visit [github](https://github.com/axios/axios) for axios documentation   

// refer index.html and script.js line 3 to line 27 for a beautiful example of using axios in real project   
```js
// Axios syntax => axios.get(url)  
// usually used as await axios.get(url)  
```

# passing headers directly to API request
```js
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
```