import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
const uri = 'mongodb://localhost:27017';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client;
let clientPromise;

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise
