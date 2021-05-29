const mongoose = require('../database');

const SeriesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    idNome: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    descricao: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        require: true,
    },
    duracao: {
        type: String,
        require: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    autor: {
        type: String,
        required: true
    }
 });
 
const Series = mongoose.model('Series', SeriesSchema);
module.exports = Series;