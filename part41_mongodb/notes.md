# starting mongo shell:  
bash:  
mongosh  

checking mongodb status: sudo systemctl status mongod  

start mongodb: sudo systemctl start mongod  

# Create and Use a database:
bash:  
use database_name  
// creates and uses a new database  
ex: use college  

note: to make the created database permanent we need to store some data in it or it will get deleted when we quit mongodb  

# Useful mongosh commands:
cls  // clears screen  
help // shows some useful commands  
show dbs // shows databases  
quit // quits mongosh  
db // shows which database we are currently in  
show collections // shows all collections inside dbs  

## BSON DATA:
# BSON:
[reading material](https://www.mongodb.com/resources/basics/json-and-bson)  
BSON is binary JSON which solves few problems of json such as memory inefficiency and parsing strings is difficult problem in json. Plus bson supports additional data types.

mongodb automatically converts our json like data into bson so we don't have to worry about it.  

# documents and collection:
documents in mongodb is like rows in sql, they store info of single entity.  

collections in mongodb is like a table in sql, they store muliple documents in it.

# inserting in DB:
[perform crud operations](https://www.mongodb.com/docs/manual/crud/)  
note: when we create a mongo document it also creates a unique id which is primary key  

show collections // shows all collections  

db.student.insertOne({name: 'adam',marks: 79}) // added this document  
db.person.insertMany([
    {name: 'adam',age: 19},
    {name: 'bob',age: 79},
])  
// added multiple documents by simply sending an array of objects instead of just an object.

# Find operation:
db.student.find() // shows all documents in student  
db.student.find({key: value}) // find all instances of specified.. Just don't forget to enclose within an object.It returns cursor.
db.student.findOne({key: value}) // find one key that matches first. It returns the actual document.

# Query Operators:
greater than: $gt  
ex: db.student.find( {marks: {gt: 75}})  
// find students with marks of over 75  

Inside a condition: $in  
ex: db.student.find( {city: {$in: ['delhi', 'mumbai']}})

Or operator: $or  
ex: db.student.find({city: {$or: ['delhi', 'chennai']}})  

[more reading](https://www.w3schools.com/mongodb/mongodb_query_operators.php)

note: pass an array when going through multiple inputs like delhi or chennai, delhi and agra etc

# Update dbs:
[update methods](https://www.w3schools.com/mongodb/mongodb_mongosh_update.php)  
[update operators we can use in above methods](https://www.w3schools.com/mongodb/mongodb_update_operators.php)

syntax to update one entry:  
db.collection.updateOne(< filter>, < update>, < options>)  

quick ex:  
db.student.updateOne({name: 'adam'}, {$set: {marks: 50}})  
// this updates a single document that matches a specified filter even though multiple documents may match the specified filter.

note: we used name: adam to find which student we were trying to update and then sepereated by , we used a $set to set the update of marks from 79 -> 50  

1. $addFields // used to add a new field if it did not exist such as city/hobby  
2. $inc // increments by one  
3. $set // can be used to update a field and even insert a new field just like $addFields by using method mentioned below  

```js
// This method can be used to Update the document, but if not found insert it. Using the like {upsert: true}
db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
    // this like ensures to insert the field if it doesn't exist already.
)
```

4. db.collection.updateMany() // update many collection which matches the specified filter all at once.

    ex: db.posts.updateMany({}, { $inc: { likes: 1 } })  
    // this updates all likes to +1 using $inc (increment) operator  

5. db.collection.replaceOne()  
// Replaces at most a single documnent that match a specified filter even though multiple documents may match the specified filter.  

Note: replaceOne() replaces all the key value of the collection except the id. So keep in mind that if we are using id then we are still performing some action on this updated collection.

# Nesting inside mongodb:
we can nest an object inside another object and find it using . operator

ex: db.student.insertOne({name: 'sarah', performance: {math: 98, physics: 35}})

to find sarah's physics marks we can use the path enclosed within parenthesis  
ex: db.student.findOne({'performance.math':98})  
// notice how "performance.math" is enclosed within parenthesis.  

# Delete in dbs:
db.collection.deleteOne(< filter >, < options>)  
// options is optional

db.collection.deleteMany(< filter>, < options>) 

db.dropDatabase() // deletes current selected database.

