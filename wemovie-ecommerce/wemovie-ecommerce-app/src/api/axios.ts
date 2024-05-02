const axios = require("axios");

const apiRequests = {
  moviesList: () => axios.get("https://wefit-movies.vercel.app/api/movies"),
};

export const getMoviesList = () =>
  apiRequests
    .moviesList()
    .then((response: any) => Promise.resolve(response.data.products))
    .catch((e: any) => Promise.reject(e.response));
