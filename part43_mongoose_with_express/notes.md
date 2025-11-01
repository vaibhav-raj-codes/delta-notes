#*`updating in mongoose:`*
By default ejs doesn't have put patch delete etc requests. so we use method-override package.

step1:
npm i method-override

step2: file.ejs:
``` js
action="/chats/<%= Chat._id %>?_method=PUT" method="POST"
```
// use ?_method=PUT at the end of param


step3: index.js:
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

