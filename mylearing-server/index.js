const express = require('express');
const app = express();
const cors = require('cors');
const topic = require('./routes/topic');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
app.use('/api/v1/topic', topic);

mongoose.connect('mongodb+srv://reduxranga:ReactAngular123@cluster0.4mrlw.mongodb.net/learningHub?retryWrites=true&w=majority').then( () => {
    app.listen(3001);
}).catch( error => console.log(error) )

