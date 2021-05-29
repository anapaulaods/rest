const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/seriesController')(app);

app.get('/series', (req, res) => res.send('API de Series'));
const port = 1008;

app.listen(port, () => console.log(`API de Series iniciado na porta ${port}`));