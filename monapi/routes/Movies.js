

const API_KEY = "561b72eb";
// Url API
const API_URL = "http://www.omdbapi.com/";


class API_MOVIE{
    constructor(movie){
        movie= document.getElementById('movie-input').value;

        // Si la ville n'est pas définit alors la ville par défault est Paris
        if(movie === undefined){
            movie = "paris";
        }
        this.movie = movie;
    }
}


getmovie()
{
    return axios
        .get(`${API_URL}?t=${this.movie}&api_key=${API_KEY}`,{
        crossdomain: true
    })
}



var express = require('express');
var router = express.Router();
var _ =require('lodash');
var axios = require('axios');


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
    movies.push({movie, id});
    res.json({
        message: `User added! ${id}`,
        users: {movie, id}
    });
});


/*    UPDATE           */

router.post('/:id',(req, res) =>{
    const { id } = req.params;
    const { movie } = req.body;

    const movieToUpdate = _.find(movie, ["id", id]);
    movieToUpdate.movie = movie;

    res.json({
        message: `Movie updated! ${id} with ${user}`
    });
});

/*   Delete    */

router.delete('/:id',(req,res) =>{
    const{ id } = req.params;
    _.remove(movies, ["id", id]);
    res.json({ message: `just remove ${id}`});
});

module.exports = router;

let movies = [{
    id: '0',
    movie: 'Le voyage de Chihiro',
    yearOfRelease: 2001,
    duration: 125, // en minutes,
    actors: ['Rumi Hiiragi', 'Miyu Irino'],
    poster: "chihiro.png" , // lien vers une image d'affiche,
    boxOffice: 355711879,// en USD$,
    rottenTomatoesScore: 97
},{
    id: '1',
    movie: 'insidious',
    yearOfRelease: 2010,
    duration: 102,
    actors: [' Patrick Wilson', ' Rose Byrne'],
    poster: "insidious.png" , // lien vers une image d'affiche,
    boxOffice: 99557032,// en USD$,
    rottenTomatoesScore: 66
 },{
    id: '2',
    movie: 'sacré graal',
    yearOfRelease: 1975,
    duration: 91, // en minutes,
    actors: [' John Cleese ', ' Graham Chapman'],
    poster: "montiPython.png" , // lien vers une image d'affiche,
    boxOffice: 1940906,// en USD$,
    rottenTomatoesScore: 97
}];