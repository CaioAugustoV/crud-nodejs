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

router.get('/', async (req, res) => {
  const contact = await Contact.find();

  res.send({ data: contact })
})

router.put('/', async (req, res) => {
  const { id } = req.query;
  const { nome, email, telefone, celular } = req.body;

  if(!id) res.status.send({ error: "Paramentro 'id' não está definido" })
  if(!nome && !telefone && !celular && !email) res.status(400).send({ error: "Nenhuma informação enviada!" })

  const contact = await Contact.findById(id);
  
  if(contact.nome == nome && 
    contact.email == email && 
    contact.telefone == telefone && 
    contact.celular == celular) res.status(400).send({ error: "Nenhuma alteração" })

  const UpdateContact = await Contact.update(req.body);

  if(UpdateContact.nModified > 0) res.send({ data: req.body })
})

module.exports = app => app.use('/contact', router)