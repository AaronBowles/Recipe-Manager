const mongoose= require("../db/connection");

const RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: Array,
    steps: Array
})

const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe;