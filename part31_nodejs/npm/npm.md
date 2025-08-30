
## Installing packages
npm install <- package name ->
ex: npm install figlet

# after installing package we get these 3 files inside the directory of installation
# 1. node_modules 
The node modules folder contains every installed dependancy for your project.

# 2. package-lock.json
It records the exact version of every installed dependancy, including its sub dependancies and their versions.

# 3. package.json
The package.json file contains descriptive and funcitonal metadata(data about a data) about a project, such as a name, version, and dependencies.

# re-install node_modules
if we have a package.json we can bring back the node_modules that was previously installed using command npm install without anything else 

npm install installs all the dependencies mentioned inside package.json file

## using a package in npm
# step 1 - make an index.js inside the directory where npm install package was done.
# step 2 - require it and check package install guide in npm website 
ex: [figlet](https://www.npmjs.com/package/figlet)
# step 3 - follow the instructions 


## initializing an package.json for our own project
npm init -> use this in new project directory to initialize an npm package.json

# installing a package globaly (not recommended)
npm install -g <- package name ->
npm link <- package name ->

using both commands will let us use the package globally


