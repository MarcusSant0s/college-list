/*const express = require('express');
const Config = require('../models/Config'); // Modelo correto
const router = express.Router();

// Listar todas as faculdades
router.get('/faculdades', async (req, res) => {
    try {
        // Busca o documento de configuração principal
        const config = await Config.findOne(); 
        if (!config || !config.Faculdades || config.Faculdades.length === 0) {
            return res.status(404).json({ error: "Nenhuma faculdade encontrada" });
        }
        res.json(config.Faculdades); // Retorna a lista de faculdades
    } catch (err) {
        console.error("Erro ao buscar faculdades:", err); // Log para depuração
        res.status(500).json({ error: "Erro ao buscar faculdades" });
    }
});

// Buscar faculdade por ID
router.get('/faculdades/:id', async (req, res) => {
    try {
        // Converte o ID para ObjectId se necessário (ou usa como string, dependendo do esquema)
        const id = req.params.id;

        // Busca a faculdade no array 'Faculdades'
        const config = await Config.findOne(
            { 'Faculdades._id': id }, // Match no array
            { 'Faculdades.$': 1 } // Projeção para retornar somente o item encontrado
        );

        if (!config || !config.Faculdades || config.Faculdades.length === 0) {
            return res.status(404).json({ error: "Faculdade não encontrada" });
        }

        res.json(config.Faculdades[0]); // Retorna a faculdade encontrada
    } catch (err) {
        console.error("Erro ao buscar faculdade:", err); // Log para depuração
        res.status(500).json({ error: "Erro ao buscar faculdade" });
    }
});

module.exports = router; */
const express = require('express');
const Faculdade = require('../models/Config');
const router = express.Router();

// Listar faculdades com paginação e filtros
router.get('/faculdades', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 100,
            estado,
            cidade,
            siglaIES,
            sort = 'Nome da IES'
        } = req.query;

        // Construir o objeto de filtro
        const filter = {};
        
        if (estado) {
            filter['Sigla da UF'] = estado.toUpperCase();
        }
        
        if (cidade) {
            filter['Município do Curso'] = new RegExp(cidade, 'i'); // Case insensitive
        }
        
        if (siglaIES) {
            filter['Sigla da IES'] = new RegExp(siglaIES, 'i'); // Case insensitive
        }

        // Calcular o número de documentos a pular
        const skip = (parseInt(page) - 1) * parseInt(limit);

        // Fazer a consulta com paginação
        const faculdades = await Faculdade.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit));

        // Contar total de documentos que correspondem ao filtro
        const total = await Faculdade.countDocuments(filter);

        // Calcular total de páginas
        const totalPages = Math.ceil(total / parseInt(limit));

        if (faculdades.length === 0) {
            return res.status(404).json({ 
                error: "Nenhuma faculdade encontrada com os filtros especificados" 
            });
        }

        res.json({
            faculdades,
            currentPage: parseInt(page),
            totalPages,
            totalItems: total,
            itemsPerPage: parseInt(limit)
        });

    } catch (err) {
        console.error("Erro ao buscar faculdades:", err);
        res.status(500).json({ error: "Erro ao buscar faculdades" });
    }
});

// Buscar faculdade por ID
router.get('/faculdades/:id', async (req, res) => {
    try {
        const faculdade = await Faculdade.findById(req.params.id);
        if (!faculdade) {
            return res.status(404).json({ error: "Faculdade não encontrada" });
        }
        res.json(faculdade);
    } catch (err) {
        console.error("Erro ao buscar faculdade:", err);
        res.status(500).json({ error: "Erro ao buscar faculdade" });
    }
});

module.exports = router;