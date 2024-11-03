import { Movie } from "@/types/movie";
import { MovieStore } from "@/types/store";
import { create } from "zustand";

const useMovieStore = create<MovieStore>((set) => ({
  favoriteMovies: [] as number[],
  selectedMovie: undefined,
  updateSelectedMovie: (movie: Movie) => set(() => ({ selectedMovie: movie })),
  toggleFavoriteMovie: (movieId: number) =>
    set((state) => {
      const isFavorite = state.favoriteMovies.includes(movieId);
      const newFavoriteMovies = isFavorite
        ? state.favoriteMovies.filter((id) => id !== movieId)
        : [...state.favoriteMovies, movieId];
      return { favoriteMovies: newFavoriteMovies };
    }),
}));

export default useMovieStore;
