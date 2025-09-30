require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');
const app = express();
const db_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('hello from console');
}),

app.get('/', (req, res) => {
    res.send('hello from api')
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/products', productRoutes);

mongoose.connect(db_uri)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));