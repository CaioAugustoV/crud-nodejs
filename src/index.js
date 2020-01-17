const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4100;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controlles/contact')(app);

app.listen(port, () => console.log(`Projeto foi aberto na porta ${port} 🚀`));