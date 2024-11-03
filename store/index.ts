import { Movie } from "@/types/movie";
import { MovieStore } from "@/types/store";
import { create } from "zustand";

const useMovieStore = create<MovieStore>((set) => ({
  favoriteMovies: [] as Movie[],
  selectedMovie: undefined,
  updateSelectedMovie: (movie: Movie) => set(() => ({ selectedMovie: movie })),
  toggleFavoriteMovie: (movie: Movie) =>
    set((state) => {
      const isFavorite = state.favoriteMovies.some(
        (favMovie) => favMovie.id === movie.id
      );
      const newFavoriteMovies = isFavorite
        ? state.favoriteMovies.filter((favMovie) => favMovie.id !== movie.id)
        : [...state.favoriteMovies, movie];
      return { favoriteMovies: newFavoriteMovies };
    }),
}));

export default useMovieStore;
