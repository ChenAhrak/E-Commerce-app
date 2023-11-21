const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { Schema } = mongoose;
const app = express()
const mongoPort = "mongodb://localhost:27017/e-commerce-app"
const port = 3001

app.use(cors());

mongoose.connect(mongoPort);

// Create a schema for the products collection
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean
});

//Create a model for the products collection
const Users = mongoose.model('users', usersSchema);
module.exports = Users;

//delete all products from the collection
Users.deleteMany({ name: "oran"  })
  .then(() => {
    console.log('All products deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting products:', error);
  });

app.get('/users', async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
   //insert data from client to mongodb

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.use(express.json()); // To parse JSON in the request body

app.post('/users', (req, res) => {
    const dataFromClient = req.body;
    // Process and save data to MongoDB
    Users.insertMany(dataFromClient)
        .then(() => {
            console.log('New user inserted successfully');
        })
        .catch((error) => {
            console.error('Error inserting new user:', error);
        });
    // Respond to the client
    res.json({ message: 'Data received successfully' });
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})