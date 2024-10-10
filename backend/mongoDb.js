const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoPort = "mongodb://localhost:27017/e-commerce-app";
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
  isAdmin: Boolean,
  cart: Array,
});

//Create a model for the products collection
const Users = mongoose.model('users', usersSchema);
module.exports = Users;

