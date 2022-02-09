// pemanggilan package express
const express = require('express')

// menggunakan package express
const app = express()

// set endpoint
app.get('/', (req, res) => {
    res.send("Hello World")
})

// konfigurasi port
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})