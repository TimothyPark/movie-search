import React,{useState} from "react";


export default function SearchMovie(){

    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    
    const movieSearchEndPointCall = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        
        const endPointMovieDB = `https://api.themoviedb.org/3/search/movie?api_key=8fbe47da1122dfd0561393c97c9c3691&language=en-US
                                 &query=${query}&page=1&include_adult=false`;
        try {
            const response = await fetch(endPointMovieDB);
            const responseData  = await response.json();
    
            console.log(responseData.results)
            setMovies(responseData.results);
            
        }catch(error) {
            console.log(error);
        }
       
    }
   
 

    return(
        <>
        <form className="form" onSubmit={movieSearchEndPointCall} >
            <label  className="label" 
                    htmlFor="query">Movie Name: </label>
            <input  className="input" 
                    type="text" 
                    placeholder="i.e. Lord of The Rings: The Two Towers" 
                    name="query"
                    value={query}
                    onChange={(e)=> {setQuery(e.target.value)}}
                    ></input>
            <button className="button" type="submit">Search</button>
        </form>
        <div className='movie-card-list'>
                {movies.filter(movie=>movie.poster_path).map(movie=>(
                    <div className="movie-card" key={movie.id}>
                        <img className="movie-image"
                              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                              alt={`${movie.title}+poster`}
                        />
                        <div className="movie-card-content">
                            <h2 className="movie-title">{movie.title}</h2>
                            <p><small>Release Date: {movie.release_date}</small></p>
                            <p><small>{movie.vote_average}</small></p>
                            <p>{movie.overview}</p>
                            <p></p>
                        </div>
                    </div>
                    
                ))}
        </div>
        </>
    )

}