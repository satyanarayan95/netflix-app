import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from "./axios"
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';  

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    const base_url = "https://image.tmdb.org/t/p/original"
  
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;

        }
        fetchData();

    }, [fetchUrl])
   
    const handleClick = (movie) => {
        console.log(movie?.title ?? movie.name);
        movieTrailer(movie?.title ?? movie.name ,{id:true} ).then((data) => {
            setTrailerUrl(data);
       console.log(data)
         
        });
      };
      
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoPlay:1,
        },
    }
    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movies && movies.map((movie) => (

                    <img
                        className="row__poster"
                        onClick={()=>handleClick(movie)}

                        key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}

                    />)
                )}
            </div>
           {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row


