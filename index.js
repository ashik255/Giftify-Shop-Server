const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
const { MongoClient } = require('mongodb');
 
const port = process.env.PORT || 5000
app.use(cors())
 
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o13hs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// console.log(uri)
 
async function run(){
try{
await client.connect();
console.log('connected')
}
finally{
    await client.connect();
}
}
run().catch(console.dir);
 
app.listen(port, () => {
  console.log(`listening at ${port}`)
})
