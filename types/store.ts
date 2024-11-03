import { Movie } from "./movie";

export interface MovieStore {
  favoriteMovies: Set<number>;
  selectedMovie?: Movie;
  toggleFavoriteMovie: (movieId: number) => void;
  updateSelectedMovie: (movie: Movie) => void;
}
