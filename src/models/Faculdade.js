const mongoose = require('mongoose');

const faculdadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    cursos: {
        type: [String],
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Faculdade', faculdadeSchema);
