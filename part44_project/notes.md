# adding commas in html numbers according to country:
for india - myNum.toLocalString("en-IN")
ex: myNum = 560000 will become 5,60,000

# validating individual variables in schema:
To validate individual variables in our schema like listing[location] or listing.price we can use joi.

npm i joi

listingSchema.validate(req.body);

[further reading](https://joi.dev/api/?v=17.13.3)