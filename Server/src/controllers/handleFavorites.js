let myFavorites =[];


const postFav = (req,res)=>{


const character = req.body;

myFavorites.push(character);

return res.status(200).json(myFavorites);

}

const deleteFav = (req,res)=>{
const {id} = req.params;
const characterFiltered = myFavorites.filter((fav)=> fav.id === Number(id));
res.status(200).jason(myFavorites)
};


module.exports = {
    postFav,
    deleteFav,
}