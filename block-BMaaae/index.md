writeCode

Write code to:-

- create a database named `sports`.

// use sports

- list all databases present in local mongod server.

> show dbs
> admin 0.000GB
> config 0.000GB
> india 0.000GB
> local 0.000GB
> weather 0.000GB

- create 3 collections named `cricket`, `football`, `TT` in sports databse.
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

> db.cricket.insertMany([{name: "Virat"},{age: 28},{email: "test@gmail.com"},{bid_price: 15}])
> {

        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("603e63d7fd9d47b57347f9e7"),
                ObjectId("603e63d7fd9d47b57347f9e8"),
                ObjectId("603e63d7fd9d47b57347f9e9"),
                ObjectId("603e63d7fd9d47b57347f9ea")
        ]

}

> db.football.insertMany([{name: "Virat"},{age: 28},{email: "test@gmail.com"},{bid_price: 15}])
> {

        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("603e63e8fd9d47b57347f9eb"),
                ObjectId("603e63e8fd9d47b57347f9ec"),
                ObjectId("603e63e8fd9d47b57347f9ed"),
                ObjectId("603e63e8fd9d47b57347f9ee")
        ]

}

> db.TT.insertMany([{name: "Virat"},{age: 28},{email: "test@gmail.com"},{bid_price: 15}])
> {

        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("603e63f1fd9d47b57347f9ef"),
                ObjectId("603e63f1fd9d47b57347f9f0"),
                ObjectId("603e63f1fd9d47b57347f9f1"),
                ObjectId("603e63f1fd9d47b57347f9f2")
        ]

}

- list all collections in sports database.
- rename `TT` collection to `tennis`.
- create a capped collection called `khokho` which should have max 3 documents.
  > db.createCollection("khokho",{capped:true,size:1024,max:3})
  > { "ok" : 1 }
  >
  > Try inserting more than 3 and see what happens?
  > it replaced the first key value pair
- check whether a collection is capped or not?
  db.collection.isCapped()
- drop all documents from `football` collection.

db.football.remove({})

- delete cricket collection completely.
  db.cricket.drop()
- delete sports database.
- check which database you are connected to ?
  sports
- connect to test database

use test
