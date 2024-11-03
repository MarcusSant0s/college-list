const express = require('express');
const router = express.Router();
const Faculdade = require('../models/Faculdade');

// Obter todas as faculdades
router.get('/faculdades', async (req, res) => {
    try {
        const faculdades = await Faculdade.find(); // Busca todos os documentos da coleção
        res.json(faculdades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para consultar faculdades por estado, cidade ou curso (filtro opcional)
router.get('/faculdades/search', async (req, res) => {
    const { estado, cidade, curso } = req.query;

    const query = {};
    if (estado) query.estado = estado;
    if (cidade) query.cidade = cidade;
    if (curso) query.cursos = curso;

    try {
        const faculdades = await Faculdade.find(query);
        res.json(faculdades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
