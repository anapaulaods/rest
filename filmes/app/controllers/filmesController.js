const express = require('express');
const Filmes = require('../models/Filmes');

const router = express.Router();

router.post('/createFilmes', async (req, res) => {
    try {
        const filmes = await Filmes.create(req.body);
        res.send(filmes);

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar filme'});
    }
});

router.get('/listFilmes', async (req, res) => {
    const filmes = await Filmes.find({});
    res.send(filmes);
});

router.get('/getByIdNomeFilmes', async (req, res) => {
    const { idNome } = req.body;
    const filmes = await Filmes.findOne({ idNome });
    res.send(filmes);
});

router.delete('/filmes', async (req, res) => {
    const { idNome } = req.body;
    const filmes = await Filmes.findOneAndRemove({ idNome });
    res.send(filmes);
});

module.exports = app => app.use(router);