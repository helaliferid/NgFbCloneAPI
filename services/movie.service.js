const addNewMovie = (Movie) => async (movie) =>{
    const _movie= new Movie(movie);
    try {
        const result = await _movie.save();
        if(result){
            return({
                status:'success',
                message:'Movie saved successfully',
                payload: result
            });
        }    
    } catch (error) {
     return({
         status:'fail',
         message:'Movie fail to be saved',
         payload: error
     });
    }
 };

 const getNonFeaturedMovies = (Movie)=>async ()=>{
    try {
        const result = await Movie.find({'featured':false});
        if(result){
            return({
                status:'success',
                message:'All Non Featured Movies',
                payload: result
            });
        }    
    } catch (error) {
     return({
         status:'fail',
         message:'Sorry',
         payload: error
     });
    }
 
 }

 const getFeaturedMovies = (Movie)=>async ()=>{
    try {
        const result = await Movie.find({'featured':true});
        if(result){
            return({
                status:'success',
                message:'All Featured Movies',
                payload: result
            });
        }    
    } catch (error) {
     return({
         status:'fail',
         message:'Sorry',
         payload: error
     });
    }
 }
 

 module.exports  = (Movie)=>{
    return ({
        addNewMovie:addNewMovie(Movie),
        getNonFeaturedMovies:getNonFeaturedMovies(Movie),
        getFeaturedMovies:getFeaturedMovies(Movie)
    });
};