const {login} =require ('../controllers/login');

const getCharByID = require('../controllers/getCharByID');
const{postFav, deleteFav} = require('../controllers/handleFavorites');
const router =require('express').Router();


router.get('/character/:id', getCharByID);

router.get('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);





