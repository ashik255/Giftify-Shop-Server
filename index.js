const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
 
const port = process.env.PORT || 5000
app.use(cors())
 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o13hs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(uri)
 
async function run(){
try{
await client.connect();
const database = client.db("Giftify-Shop");
const shopDataCollection = database.collection("shopData");

// shop data
app.get('/shopData',async(req,res)=>{
  const curser = shopDataCollection.find({});
  const data = await curser.toArray();
  const count = await curser.count();
  res.send({
    count,
    data
  });
})

}
finally{
    await client.connect();
}
}
run().catch(console.dir);
 
app.listen(port, () => {
  console.log(`listening at ${port}`)
})
