const express = require('express')
const Users = require('./mongoDb')
const cors = require('cors');
const app = express()
const port = 3001

app.use(cors());

// //delete all products from the collection
// Users.deleteMany({ name: "Eden"  })
//   .then(() => {
//     console.log('All products deleted successfully');
//   })
//   .catch((error) => {
//     console.error('Error deleting products:', error);
//   });


app.use(express.json()); // To parse JSON in the request body

app.post('/signup', async (req, res) => {
    const dataFromClient = req.body;

    try {
        // Check if email or password exists                                      Case insensitive 
        const userExist = await Users.findOne({ email: dataFromClient.email }).collation({ locale: "en", strength: 2 });
        if (!userExist) {
            // Process and save data to MongoDB
            await Users.insertMany(dataFromClient);
            console.log('User added successfully');
            res.json({ message: 'User added successfully' });
        } else {
            console.log('Email already exist');
            res.status(200).json({ message: 'Email already exist' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/login', async (req, res) => {
    const dataFromClient = req.body;

    try {
        // Check if email and password exists

        const userExist = await Users.findOne({ "$and": [{ email: dataFromClient.email }, { password: dataFromClient.password }] })
            .collation({ locale: "en", strength: 2 });
        console.log(userExist);
        if (!userExist) {
            // Process and save data to MongoDB
            res.json({ message: 'User not exist go and sign up' });
        } else {
            //update the user in the database
            console.log('User Connected successfully');
            res.status(200).json({ message: 'Welcome!!!' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/addProductToCart', async (req, res) => {
    const dataFromClient = req.body;
    console.log("In Server");
    try {
        //Search for users connected
        const userConnected = await Users.findOne({ connected: true });
        if (userConnected) {

            //Update the cart field in the database with the new product and the user connected 
            await Users.updateOne({ _id: userConnected._id }, { $push: { cart: dataFromClient } })
            console.log('Product added successfully', dataFromClient);
            res.status(200).json({ message: 'Product added successfully' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete("/removeProductFromCart", async (req, res) => {
    const dataProductToDelete = req.body;

    try {
        const userConnected = await Users.findOne({ connected: true });

        if (userConnected) {

            // run and find the product in the cart and delete it
            const productToDelete = userConnected.cart.find(product => product.id === dataProductToDelete.id);
            await Users.updateOne(
                { _id: userConnected._id },
                { $pull: { cart: productToDelete } }
            );

            console.log('Product deleted successfully', productToDelete);
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found in the cart' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



app.put("/updateUserStatus", async (req, res) => {
    const userLoggedin = req.body;
    try {
        const userConnected = await Users.findOne({ connected: true });
        if (userConnected) {

            await Users.updateOne({ _id: userConnected._id }, { connected: !userLoggedin.isUserLoggedIn })
            console.log('User Status updated successfully');
            res.status(200).json({ message: 'User Status updated successfully' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})