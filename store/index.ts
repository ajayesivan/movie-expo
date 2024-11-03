import { Movie } from "@/types/movie";
import { MovieStore } from "@/types/store";
import { create } from "zustand";

const useMovieStore = create<MovieStore>((set) => ({
  favoriteMovies: new Set<number>(),
  selectedMovie: undefined,
  updateSelectedMovie: (movie: Movie) => set(() => ({ selectedMovie: movie })),
  toggleFavoriteMovie: (movieId: number) =>
    set((state) => {
      const newFavoriteMovies = new Set(state.favoriteMovies);
      if (newFavoriteMovies.has(movieId)) {
        newFavoriteMovies.delete(movieId);
      } else {
        newFavoriteMovies.add(movieId);
      }
      return { favoriteMovies: newFavoriteMovies };
    }),
}));

export default useMovieStore;
