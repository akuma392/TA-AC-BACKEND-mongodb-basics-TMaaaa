writeCode

Write command to

- List collections from a database.

show collections

- create a new collection in your country database which you created recently.

db.createCollection("state")

Write code to:-

- crate a database named `weather`
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
  db.weather.insert({key1:"value"},{key2:"value2"},{key3:"value"})
  db.weather.find()
- create a simple collection named `humidity`
  db.createCollection("humidity)
- check whether `temperature` collection is capped or not ?
- Delete `humidity` collection and then the entire database(weather).

db.weather.drop()
