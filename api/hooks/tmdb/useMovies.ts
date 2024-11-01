import { axiosTmdb } from "@/api/axios";
import { generateTmdbImageUrl, TMDB_POPULAR_MOVIES } from "@/api/urls/tmdb";
import { Movie } from "@/types/movie";
import { TmdbMovie, TmdbPopularMovieResponse } from "@/types/tmdb";
import { useQuery } from "@tanstack/react-query";

const transformTmdbMovieData = (movies: TmdbMovie[]): Movie[] => {
  return movies.map((movieObject) => ({
    id: movieObject.id,
    title: movieObject.title,
    rating: movieObject.vote_average,
    ratingCount: movieObject.vote_count,
    releaseYear: movieObject.release_date.substring(0, 4),
    posterThumbnailUrl: generateTmdbImageUrl(movieObject.poster_path, 200),
    posterUrl: generateTmdbImageUrl(movieObject.poster_path, 1080),
    overview: movieObject.overview,
  }));
};


// TODO: https://github.com/ajayesivan/movie-expo/issues/36
const useMovies = () => {
  const { data } = useQuery<TmdbPopularMovieResponse>({
    queryKey: ["tmdb", "moives", "1"],
    queryFn: async () => {
      const res = await axiosTmdb.get(TMDB_POPULAR_MOVIES, {
        params: { language: "en-US", page: "1" },
      });
      return res.data;
    },
  });

  if (!data) {
    return { movies: [], page: 0, totalPages: 0 };
  }

  const { page, results, total_pages: totalPages } = data;

  const movies = transformTmdbMovieData(results);

  return { movies, page, totalPages };
};

export default useMovies;
