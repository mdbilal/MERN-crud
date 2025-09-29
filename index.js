const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db_uri = 'mongodb+srv://mdbilalofficial_db_user:nodeapipassword@cluster0.merjpy6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 3000;

app.listen(PORT, () => {
    console.log('hello from console');
}),

app.get('/', (req, res) => {
    res.send('hello from api')
})

mongoose.connect(db_uri)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));