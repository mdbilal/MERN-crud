const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();
const db_uri = 'mongodb+srv://mdbilalofficial_db_user:nodeapipassword@cluster0.merjpy6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 3000;

app.listen(PORT, () => {
    console.log('hello from console');
}),

app.get('/', (req, res) => {
    res.send('hello from api')
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({success: true, data: product, message: 'Product created successfully'})
    } catch (error) {
        res.status(500).json({success: false, data: null, message: error.message })
    }
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products, message: null});
    } catch (error) {
        res.status(500).json({success: false, data: null, message: error.message});
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json({success: true, data: product, message: null});
    } catch (error) {
        res.status(500).json({success: false, data: null, message: error.message});
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            res.status(404).json({success: true, data: null, message: 'Product not found'});
        }

        const updated_product = await Product.findById(id);
        res.status(200).json({success: true, data: updated_product, message: 'Product Updated'});
    } catch (error) {
        res.status(500).json({success: false, data: null, message: error.message})
    }
});

app.delete('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({success: false, data: null, message: 'product not found'})
        }

        res.status(200).json({success: true, data: null, message: 'product deleted'});
    } catch (error) {
        res.status(500).json({success: false, data: null, message: error.message});
    }
});

mongoose.connect(db_uri)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));