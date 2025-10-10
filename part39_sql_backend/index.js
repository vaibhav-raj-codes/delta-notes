const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Asvr@1407'
});

try {
    // A simple SELECT query
    connection.query(
        // first argument is a clause
        'SHOW TABLES',
        // second argument is a function with 3 arguments err, results and fields
        function (error, results, fields) {
            if (error) throw error;
            console.log("Result is:", results); // fields contains extra meta data about results, if available
        }
    );
}
catch (err) {
    console.log(`Error found: ${err}`);
}

connection.end();