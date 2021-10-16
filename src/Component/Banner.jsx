import React, { useState, useEffect } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from './Request';
import instance from './axios';
import auth from '../firebase';
import {useHistory} from "react-router-dom"

function Banner() {
    const history=useHistory()

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();

    }, [])
    console.log(movie)


    //after a certain words it will only show ...
    function truncate(string, n) {

        return string?.length > n ? string.substr(0, n - 1) + "...." : string;

    }
  
  

    return (<>
        {movie && <header

            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path} ")`
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">

                    <button className="banner__button">play</button>
                    <button className="banner__button">My List</button>
                  
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)} </h1>
            </div>

            <div className="banner__fadeBottom"></div>
        </header>}
    </>
    )
}

export default Banner
