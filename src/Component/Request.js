const  API_KEY="371e50a47e0bcb5e4ec6a1b884b39616";
const requests={
   fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY} `,
   fetchNetflixOriginals:`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY} `,
   fetchTopRated:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY} `,
   fetchActionMovies:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY} `,
   fetchComedyMovies:`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY} `,
   fetchHorrorMovies:`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY} `,
   fetchRomanceMovies:`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY} `,
   fetchDocumentries: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY} `,
}
export default requests;
