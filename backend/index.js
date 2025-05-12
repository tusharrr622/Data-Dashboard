require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const DataModel = require('./models/Data');
const app = express();
const cors = require('cors');  

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', async (req, res) => {
  try {
    const Data = await DataModel.find({}).limit(30); 
    res.json(Data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


