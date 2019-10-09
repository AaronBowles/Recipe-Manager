const mongoose = require('mongoose');

mongoose.connect(mongoURI,{ useNewUrlParser: true}, () => {
    console.log("We connected!!!")
  })

mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/recipes";
}

module.exports = mongoose
