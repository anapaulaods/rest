const express = require('express');
const Animes = require('../models/Animes');

const router = express.Router();

router.post('/createAnimes', async (req, res) => {
    try {
        const animes = await Animes.create(req.body);
        res.send(animes);

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar anime'});
    }
});

router.get('/listAnimes', async (req, res) => {
    const animes = await Animes.find({});
    res.send(animes);
});

router.get('/getByIdNomeAnimes', async (req, res) => {
    const { idNome } = req.body;
    const animes = await Animes.findOne({ idNome });
    res.send(animes);
});

router.delete('/animes', async (req, res) => {
    const { idNome } = req.body;
    const animes = await Animes.findOneAndRemove({ idNome });
    res.send(animes);
});

module.exports = app => app.use(router);