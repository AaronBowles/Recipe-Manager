const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/recipes";
}
mongoose.connect('mongodb://localhost/recipes',{ useNewUrlParser: true,useUnifiedTopology: true,
useFindAndModify: false}, () => {
    console.log("We connected!!!")
  })
  module.exports = mongoose