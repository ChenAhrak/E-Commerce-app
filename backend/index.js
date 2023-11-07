const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mongoPort = "mongodb://localhost:27017/e-commerce-app"
const port = 3001


const clients = mongoose.connect(mongoPort)
  .then(async () => {
    // Access the database
    const db = mongoose.connection.db;

    // List all collections in the database
    const collectionNames = await db.listCollections().toArray();

    // Extract and print the names of the collections
    const collectionNamesArray = collectionNames.map((collection) => collection.name);
    console.log('Collections in the database:', collectionNamesArray);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



// const dataSchema = new mongoose.Schema({
//   // Define your data structure here
//   name: String,
//   email: String,
//   password: String,
// });

// const Data = mongoose.model('Data', dataSchema);

app.get('/users', async (req, res) => {
  try {
    // Query MongoDB to get the data
    res.send('Hello World!')
    const data = await Data.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})