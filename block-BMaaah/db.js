// - title as string
// - createdAt as date
// - details as String
// - author as nested object
//   - author should have
//     - name
//     - email
//     - age
//     - example author: {name: 'abc', email: 'abc@gmail', age: 25}
// - tags : Array of strings like ['html', 'css']

let obj1 = {
  title: 'Article1',
  createdAt: '02/03/2021',
  details: 'Drama',
  author: { name: 'Abc', email: 'test@gmail.com', age: 25 },
  tags: ['html', 'CSS'],
};

// 1.use blog

// 2. db.createCollection("articles")
// 3. db.articles.insert({
//   title: 'Article1',
//   createdAt: '02/03/2021',
//   details: 'Drama',
//   author: { name: 'Abc1', email: 'test@gmail.com', age: 25 },
//   tags: ['html', 'CSS'],
// })
// db.articles.insert({
//   title: 'Article2',
//   createdAt: '02/03/2021',
//   details: 'Comedy',
//   author: { name: 'Abc2', email: 'test@gmail.com', age: 25 },
//   tags: ['html', 'mongo'],
// })
// db.articles.insert({
//   title: 'Article3',
//   createdAt: '02/03/2021',
//   details: 'fiction',
//   author: { name: 'Abc3', email: 'test@gmail.com', age: 25 },
//   tags: ['node', 'CSS'],
// })
// 4. > db.articles.find()
// 5.  db.articles.find({title:"Article1"}).pretty()
// 6. db.articles.find({title:"Article1"})
// 7.db.articles.find({"author.name":"Abc"})

// 8. db.articles.find({tags :["html","CSS"]}).pretty();
// 9. db.articles.update({_id:ObjectId("603f591e8f168da2f6440a6c")},{$set :{title:"Article3"}})
// 10. db.articles.update({"author.name" : "Abc"},{title:"Node.js"})
// 12. db.articles.update({title:"Article2"},{$push:{tags:"mongo"}})
// 13.   db.articles.update({_id:ObjectId("603f591e8f168da2f6440a6c")},{$set :{title:"Article3"}})
// db.articles.update({\_id:ObjectId("603f591e8f168da2f6440a6c")},{title:"Article3"})
// 14. db.articles.update({title:"Article2"},{$inc:{"author.age":5}})
// db.articles.remove({-id:ObjectId("603f591e8f168da2f6440a6c")})
