# Adding images:
new.ejs ->  

when making form use  
```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```
this enables us to send files.  

## multer:
It is an npm library that helps in parsing images  

## dotenv:
Env viles are key value pairs that store important information that should not be shown to the user.
To access .env files we use  
app.js ->   
```js
// accessing .env file
if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
console.log(process.env.SECRET);
```
inside .env file ->    
SECRET=mysecret  

## uploading images to cloud:
step 1:   
store cloud name, key and api secret in .env file  

step 2:
npm i cloudinary     
npm i multer-storage-cloudinary   NOTE: this one didn't work for me.  
npm install multer multer-storage-cloudinary --legacy-peer-deps  
     
step3: cloudConfig.js ->  
```js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowedFormats: ["png", "jpg", "jpeg"]
    },
});

module.exports = {
    cloudinary,
    storage
};
```

step 4: file where you want to use, in this ex listing.js ->  
```js
const multer  = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage }); 
```


## for sessions instead of using local broswer storage we shift to more secure one: 

npm install connect-mongo --legacy-peer-deps 