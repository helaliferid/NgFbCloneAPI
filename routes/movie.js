const express = require('express');
const router = express.Router();
const Movie = require('../db/models/movie.schema');
const movieService = require('../services/movie.service')(Movie);
const validateUser = require('../helpers/user.validations').validateUser;

router.get('/featured', validateUser ,async function(req, res, next) {
    try {
       // console.log(req.body);
        let response = await movieService.getFeaturedMovies();
        res.json(response);
      } catch (error) {
        next(error)
      }
});

router.get('/unfeatured', async function(req, res, next) {
    try {
        let response = await movieService.getNonFeaturedMovies();
        res.json(response);
      } catch (error) {
        next(error)
      }
});


router.post('/', async function(req, res, next) {
    const movie = req.body;
    try {
        let response = await movieService.addNewMovie(movie);
        res.json(response);
      } catch (error) {
        next(error)
      }
});



module.exports = router;
