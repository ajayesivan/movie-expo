import { Movie } from "./movie";

export interface MovieStore {
  favoriteMovies: Movie[];
  selectedMovie?: Movie;
  toggleFavoriteMovie: (movie: Movie) => void;
  updateSelectedMovie: (movie: Movie) => void;
}
