const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');

const mongoClient = new MongoClient('mongodb+srv://jnesler:sXVEaiMNW1GkL9mL@cluster0.mongodb.net//?retryWrites=true&w=majority');

async function getStaticProps(context) {
  await mongoClient.connect();
  const collection = mongoClient.db().collection('computers');
  const result = await collection.find({}).toArray();
  await mongoClient.close();

  const response = await axios.get('https://api.example.com/computers');
  const data = response.data.cluster0;

  return {
    props: {
      computers: [...result, ...data]
    }
  }
}
