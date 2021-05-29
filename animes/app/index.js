const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/animesController')(app);

app.get('/animes', (req, res) => res.send('API de Animes'));
const port = 1811;

app.listen(port, () => console.log(`API de Animes iniciado na porta ${port}`));