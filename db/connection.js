const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes',{ useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports = mongoose
