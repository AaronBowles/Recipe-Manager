const Recipe = require("../models/recipe");
const seedData = require("./seeds.json");

Recipe.deleteMany({})
.then(()=> {
    console.log(seedData)
    return Recipe.insertMany(seedData);

})
.then(() => {
    console.log('seeds added')
    process.exit();
})

