const express = require('express');
const parser = require('body-parser');
const methodOverride = require('method-override')
const expbs = require('express-handlebars')

const app = express();

const recipeController = require("./controllers/recipes");


app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use("/", recipeController);


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});