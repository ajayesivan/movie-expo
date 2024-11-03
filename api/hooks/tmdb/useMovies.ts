import { axiosTmdb } from "@/api/axios";
import {
  generateTmdbImageUrl,
  TMDB_MOVIE_LISTS_POPULAR,
} from "@/api/urls/tmdb";
import { Movie } from "@/types/movie";
import {
  TmdbMoiveListsPopularMovie,
  TmdbMoviesListPopularResponse,
} from "@/types/tmdb";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useCallback } from "react";

const transformTmdbMovieData = (
  movies: TmdbMoiveListsPopularMovie[]
): Movie[] => {
  return movies.map((movieObject) => ({
    id: movieObject.id,
    title: movieObject.title,
    rating: movieObject.vote_average.toFixed(1),
    ratingCount: movieObject.vote_count,
    releaseYear: movieObject.release_date.substring(0, 4),
    posterThumbnailUrl: generateTmdbImageUrl(movieObject.poster_path, 200),
    posterUrl: generateTmdbImageUrl(movieObject.poster_path, 500),
    overview: movieObject.overview,
    backdropUrl: generateTmdbImageUrl(movieObject.backdrop_path, 500),
  }));
};

interface UseMovies {
  movies: Movie[];
  loadMore: () => void;
  error: Error | null;
  isLoading: boolean;
}

const useMovies = (): UseMovies => {
  const { data, hasNextPage, fetchNextPage, error, isLoading } =
    useInfiniteQuery<TmdbMoviesListPopularResponse>({
      initialPageParam: 1,
      queryKey: ["tmdb", "movieLists", "popular"],
      queryFn: async ({ pageParam }) => {
        const res = await axiosTmdb.get(TMDB_MOVIE_LISTS_POPULAR, {
          params: { page: pageParam },
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

  return { movies, loadMore, error, isLoading };
};

export default useMovies;
