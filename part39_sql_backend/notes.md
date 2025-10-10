# Faker package:
we can use this to generate fake data  
to install it use npm i @faker-js/faker

[check usage here](https://www.npmjs.com/package/@faker-js/faker)

# method 1 of running sql - mysql workbench.

# Connecting node with mysql: method 2 of running sql:
we can use a package called MySQL2  
npm i mysql2 

[how to use](https://sidorares.github.io/node-mysql2/docs)

``` js
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'raj@2004'
});

// A simple SELECT query
connection.query(
    // first argument is a clause
    'SELECT * FROM `temp`',
    // second argument is a function with 3 arguments err, results and fields
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);
```
# Using SQL from CLI: method 3 of running sql:
bash:  
/usr/local/mysql/bin/mysql -u root -p  (on mac)

mysql -u root -p (on ubuntu)

# Ending connection
connecion.end();  
// to close connection, use after the end of your connection.query() function  

# running very big sql queries: method 4 of running sql:
step 1: create a schema.sql file and write your queries in it

step 2: open sql in command line interface(CLI) and use  
bash:  
source schema.sql

