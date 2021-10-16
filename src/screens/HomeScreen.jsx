import React from 'react'
import   './HomeScreen.css'
import Nav from "../Component/Nav"
import Banner from "../Component/Banner"
import Row from "../Component/Row"
import requests from '../Component/Request'

function HomeScreen() {
    return (
        <div className="homeScreen">
             
         <Nav></Nav>
         <Banner/>
    
         <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
         
         />
         <Row
         title="TRENDING NOW"
         fetchUrl={requests.fetchTrending}
         />
         <Row
         title="TOP RATED"
         fetchUrl={requests.fetchTopRated}
         />
         <Row
          title="ActionMovies"
          fetchUrl={requests. fetchActionMovies}
         
         />
         <Row
          title="ComedyMovies"
          fetchUrl={requests.fetchComedyMovies}
         />
         <Row
         title="HorrorMovies"
         fetchUrl={requests.fetchHorrorMovies}
         />
         <Row
         title="RomanceMovies"
         fetchUrl={requests.fetchRomanceMovies}
         />
         <Row
         title="Documentries"
         fetchUrl={requests.fetchDocumentries}
         />

        </div>
    )
}

export default HomeScreen
