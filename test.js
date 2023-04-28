const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
//const uri = process.env.MONGODB_URI;
const uri ='mongodb+srv://neslerj:atS7QcbaPWKmkC5@cluster0.w8nbxxy.mongodb.net/?retryWrites=true&w=majority'
 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db("inventory");
    const collection = database.collection( "computers" );
    const cursor = collection.find({ });
    await cursor.forEach(console.log);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);