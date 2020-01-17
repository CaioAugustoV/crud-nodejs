const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  const { nome, email, telefone, celular } = req.body;

  if(!nome) res.status(400).send({ error: "'nome' não está sendo enviado." });
  if(!telefone && !celular && !email) res.status(400).send({ error: "Nenhuma informação enviada!" })
  
  const contact = await Contact.create(req.body);

  res.send({ data: contact })
})

module.exports = app => app.use('/contact', router)