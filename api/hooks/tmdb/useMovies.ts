import { axiosTmdb } from "@/api/axios";
import { generateTmdbImageUrl, TMDB_POPULAR_MOVIES } from "@/api/urls/tmdb";
import { Movie } from "@/types/movie";
import { TmdbMovie, TmdbPopularMovieResponse } from "@/types/tmdb";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useCallback } from "react";

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

interface UseMovies {
  movies: Movie[];
  loadMore: () => void;
}

// TODO: https://github.com/ajayesivan/movie-expo/issues/36
const useMovies = (): UseMovies => {
  const { data, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TmdbPopularMovieResponse>({
      initialPageParam: 1,
      queryKey: ["tmdb", "moives"],
      queryFn: async ({ pageParam }) => {
        const res = await axiosTmdb.get(TMDB_POPULAR_MOVIES, {
          params: { language: "en-US", page: pageParam },
        });
        return res.data;
      },
      getNextPageParam: (lastResponse) => {
        if (lastResponse.page < lastResponse.total_pages) {
          return lastResponse.page + 1;
        }
        return undefined;
      },
    });

  const movies = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.pages.flatMap((page) => transformTmdbMovieData(page.results));
  }, [data]);

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return { movies, loadMore };
};

export default useMovies;
