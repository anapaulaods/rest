const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/filmesController')(app);

app.get('/filmes', (req, res) => res.send('API de Filmes'));
const port = 2509;

app.listen(port, () => console.log(`API de Filmes iniciado na porta ${port}`));