export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const apiKey = "689b5231c55ce30f61d654cb4851693a"

export const tmdbApiEndpoint = "https://api.themoviedb.org/3/movie"
export const tmdbApiEndpointSearch = "https://api.themoviedb.org/3/search/movie"

export const tmdbAPI = {
  getMovieList: (type, page = 1) => `${tmdbApiEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieSearch: (query, page = 1) => `${tmdbApiEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieDetail: (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) => `https://api.themoviedb.org/3/movie/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
}