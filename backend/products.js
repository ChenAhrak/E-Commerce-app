// import all_product from './Assets/all_product.js'
const all_product = require('./Assets/all_product.js')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { Schema } = mongoose;
const app = express()
const mongoPort = "mongodb://localhost:27017/e-commerce-app"
const port = 3002

app.use(cors());

mongoose.connect(mongoPort);

// Create a schema for the products collection
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    imagePath: String, // Add this field for the image path
    new_price: Number,
    old_price: Number,
});

//Create a model for the products collection
const Product = mongoose.model('Products', productSchema);
module.exports = Product;

// Insert the new products into the collection
// Product.insertMany(all_product)
//     .then(() => {
//         console.log('New products inserted successfully');
//     })
//     .catch((error) => {
//         console.error('Error inserting new products:', error);
//     });

// delete all products from the collection
// Product.deleteMany()
//     .then(() => {
//         console.log('All products deleted successfully');
//     })
//     .catch((error) => {
//         console.error('Error deleting products:', error);
//     });

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})