const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const DataSchema = new Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,


}, {
    timestamps: true,
})

 const DataModel = model('Data', DataSchema, 'data'); 


module.exports = DataModel;