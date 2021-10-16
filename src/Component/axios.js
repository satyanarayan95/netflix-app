//this is a library when we make a reqit is a promised based library when we make req acros server
//tmdb provide a api act as a backend to fetch movie for our app"

import axios from "axios";

const instance=axios.create({
    baseURL:"https://www.themoviedb.org/"
})
export default instance;



 