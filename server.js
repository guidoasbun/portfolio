const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

//Connect Database
connectDB();

//Middleware
app.use(express.json())
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true })) //true??


app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/contact', require('./routes/api/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
