const apiKey: string = '08d9d5fc6f82d02ed6b1e5a45fb1a604';

const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const searchMovies = (name: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`;
};

const searchMovieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};
const searchMovieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};

export {
  nowPlayingMovies,
  upcomingMovies,
  popularMovies,
  baseImagePath,
  searchMovies,
  searchMovieDetails,
  searchMovieCastDetails,
};
