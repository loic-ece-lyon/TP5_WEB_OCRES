

var express = require('express');
var router = express.Router();
var _ =require('lodash');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({ movies });
});

/*  GET one user.   */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const movie = _.find(movies,['id', id])
    res.status(200).json({
        message: 'User found!',
        movie
    });
});


/*  PUT new user */
router.put('/', (req, res) => {
    const { movie } = req.body;
    const { id } = _.uniqueId();
    user.push({movie, id});
    res.json({
        message: 'User added! ${id}',
        users: {movie, id}
    });
});


module.exports = router;

let movies = [{
    id: '0',
    movie: 'spirited away',
    yearOfRelease: 2001,
    duration: 125, // en minutes,
    actors: ['Rumi Hiiragi', 'Miyu Irino'],
    poster: "chihiro.png" , // lien vers une image d'affiche,
    boxOffice: 355711879,// en USD$,
    rottenTomatoesScore: 97
},{
    id: '1',
    movie: 'se',
    yearOfRelease: 12,
    duration: 2, // en minutes,
    actors: [' LOLO', ' OUI'],
    poster: "chihiro.png" , // lien vers une image d'affiche,
    boxOffice: 1,// en USD$,
    rottenTomatoesScore: 2
 },{
    id: '2',
    movie: 'maman',
    yearOfRelease: 10,
    duration: 203, // en minutes,
    actors: [' ZJFS', ' OLJLUI'],
    poster: "chihiro.png" , // lien vers une image d'affiche,
    boxOffice: 1,// en USD$,
    rottenTomatoesScore: 2
}];