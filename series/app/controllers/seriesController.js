const express = require('express');
const Series = require('../models/Series');

const router = express.Router();

router.post('/createSeries', async (req, res) => {
    try {
        const series = await Series.create(req.body);
        res.send(series);

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar serie'});
    }
});

router.get('/listSeries', async (req, res) => {
    const series = await Series.find({});
    res.send(series);
});

router.get('/getByIdNomeSeries', async (req, res) => {
    const { idNome } = req.body;
    const series = await Series.findOne({ idNome });
    res.send(series);
});

router.delete('/series', async (req, res) => {
    const { idNome } = req.body;
    const series = await Series.findOneAndRemove({ idNome });
    res.send(series);
});

module.exports = app => app.use(router);