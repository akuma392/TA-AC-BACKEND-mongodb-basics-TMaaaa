writeCode

Write code to:-

- create a database named `mountains`

use mountains

- a collection inside that database named `himalayas`
  db.createCollection("himalayas")

- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`

db.himalayas.insert( {name: 'Dhauldhar range', height: '4000 mtrs' })

- insert multiple document using insertMany command
  db.himalayas.insert([ {name: 'Dhauldhar range', height: '4005 mtrs' },{name:"Mount1",height:"5000 mtr"}])
- find all documents from mountains
  db.himalyas.find({})
- find a single document using name
  db.himalayas.find({name:"Mount1"})
