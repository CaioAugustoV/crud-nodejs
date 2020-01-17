const mongoose = require('../database');

const ContactSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  telefone: {
    type: String,
  },
  celular: {
    type: String,
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;