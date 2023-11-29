const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { Schema } = mongoose;
const app = express()
const port = 3001
const mongoPort = "mongodb://localhost:27017/e-commerce-app"

app.use(cors());

mongoose.connect(mongoPort);
//check if the connection with the database is successful
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

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

// //delete all products from the collection
// Users.deleteMany({ name: "Eden"  })
//   .then(() => {
//     console.log('All products deleted successfully');
//   })
//   .catch((error) => {
//     console.error('Error deleting products:', error);
//   });

// app.get('/users', async (req, res) => {
//   const dataFromClient = req.body;
//   try {
//     //check if email and password are exist in the database
//     const userExist = await Users.findOne({ "$or": [{ email: dataFromClient.email }, { password: dataFromClient.password }] });
//     if (!userExist) {
//         res.json({ message: 'Email or Password are not exist go and sign up' });
//     }
//     else {
//         res.json({ message: 'Email and Password are exist' });
//     }
   

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

app.use(express.json()); // To parse JSON in the request body

app.post('/users', async (req, res) => {
  const dataFromClient = req.body;

  try {
      // Check if email or password exists
      const userExist =  await Users.findOne({ "$or": [{ email: dataFromClient.email }, { password: dataFromClient.password }] });
      if (!userExist) {
          // Process and save data to MongoDB
          await Users.insertMany(dataFromClient);
          console.log('User added successfully');
          res.json({ message: 'User added successfully' });
      } else {
          console.log('Email or Password already exist');
          res.status(400).json({ message: 'Email or Password already exist' });
      }
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})