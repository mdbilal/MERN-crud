const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log('hello from console');
}),

app.get('/', (req, res) => {
    res.send('hello from api')
})