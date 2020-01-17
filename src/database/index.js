const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/crud-nodejs";

mongoose.connect(db, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useCreateIndex: true 
});
mongoose.Promise = global.Promise;

module.exports = mongoose;