const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()
let PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './')));
// app.set('views', path.join(__dirname, './'));

app.get('/', (req,res) => {
    res.render('index.html')
})

app.listen(PORT, () =>{
    console.log(`lestning at port: ${PORT}`);
})