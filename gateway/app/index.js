const express = require('express');
const httpProxy = require('express-http-proxy');

const app = express();
const port = 2021;
const {
  FILMES_API_URL,
  ANIMES_API_URL,
  SERIES_API_URL,
} = require('./URLs');

const filmesServiceProxy = httpProxy(FILMES_API_URL);
const animesServiceProxy = httpProxy(ANIMES_API_URL);
const seriesServiceProxy = httpProxy(SERIES_API_URL);


const link = `<a href="filmes"><input type="submit" value="API de Filmes"/></a>
              <br>
              <a href="animes"><input type="submit" value="API de Animes"/></a>
              <br>
              <a href="series"><input type="submit" value="API de Series"/></a>`;

app.get('/', (req, res) => res.send(link));


// filmes
app.get('/filmes', (req, res) => filmesServiceProxy(req, res));
app.post('/createFilmes', (req, res) => filmesServiceProxy(req, res));
app.get('/listFilmes', (req, res) => filmesServiceProxy(req, res));
app.get('/getByIdNomeFilmes', (req, res) => filmesServiceProxy(req, res));
app.delete('/filmes', (req, res) => filmesServiceProxy(req, res));

// animes
app.get('/animes', (req, res) => animesServiceProxy(req, res));
app.post('/createAnimes', (req, res) => animesServiceProxy(req, res));
app.get('/listAnimes', (req, res) => animesServiceProxy(req, res));
app.get('/getByIdNomeAnimes', (req, res) => animesServiceProxy(req, res));
app.delete('/animes', (req, res) => animesServiceProxy(req, res));

// series
app.get('/series', (req, res) => seriesServiceProxy(req, res));
app.post('/createSeries', (req, res) => seriesServiceProxy(req, res));
app.get('/listSeries', (req, res) => seriesServiceProxy(req, res));
app.get('/getByIdNomeSeries', (req, res) => seriesServiceProxy(req, res));
app.delete('/series', (req, res) => seriesServiceProxy(req, res));

app.listen(port, () => console.log(`Gateway iniciado na porta ${port}!`));