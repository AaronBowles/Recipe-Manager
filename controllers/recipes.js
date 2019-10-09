const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe');

router.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
})


router.get('/new', (req, res) => {
    res.render('new');
  });

router.get("/", (req, res) => {
    Recipe.find({}).then( recipes => {
        res.render("index", { recipes })
    }).catch(err => console.log(err));
});

router.post("/", (req, res) => {
    console.log(req.body)
    Recipe.create(req.body).then( recipe => {
        res.redirect("/")
    });
});

router.get('/edit/:id', (req, res) => {
    Recipe.findOne({_id: req.params.id})
      .then(recipe => {
        res.render("edit", { recipe })
      })
  })

router.put('/:id', (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true})
      .then(recipe => {
        res.redirect("/")
      })
  })



router.get('/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id })
    .then(recipe => {
            res.render("show",  recipe )
    })
    .catch(err => console.error(err));
});



module.exports = router;