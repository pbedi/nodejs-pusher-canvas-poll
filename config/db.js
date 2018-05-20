const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promise
mongoose.Promise = global.Promise;
// Mongoose connect
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB: Connected'))
  .catch(err => console.log(err));
