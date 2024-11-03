import { useMovies } from "@/api/hooks/tmdb";
import { IconButton, ItemSeparator } from "@/components/atoms";
import { MovieCard } from "@/components/molecules";
import { StyledView } from "@/components/styled";
import { useClerk } from "@clerk/clerk-expo";
import { router, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import t from "@/localization";
import { useCallback } from "react";
import { Movie } from "@/types/movie";
import useMovieStore from "@/store";

const Home = () => {
  const { signOut } = useClerk();
  const { movies, loadMore } = useMovies();
  const { favoriteMovies, toggleFavoriteMovie, updateSelectedMovie } =
    useMovieStore((state) => state);

  const logout = () => {
    signOut();
  };

  const onPressFavorites = () => {
    router.push("/(home)/favorites");
  };

  const onPressMovie = useCallback(
    (movie: Movie) => {
      updateSelectedMovie(movie);
      router.push("/(home)/movie");
    },
    [updateSelectedMovie]
  );

  const onToggleFavorite = useCallback(
    (movieId: number) => {
      toggleFavoriteMovie(movieId);
    },
    [toggleFavoriteMovie]
  );

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <MovieCard
        imageUri={item.posterThumbnailUrl}
        title={item.title}
        year={item.releaseYear}
        rating={item.rating}
        onFavoritePress={() => onToggleFavorite(item.id)}
        overview={item.overview}
        isFavorite={favoriteMovies.includes(item.id)}
        onPress={() => onPressMovie(item)}
      />
    ),
    [onPressMovie, onToggleFavorite, favoriteMovies]
  );

  return (
    <StyledView p="20px" flex={1}>
      <Stack.Screen
        options={{
          title: t("movie-expo"),
          headerRight: () => (
            <IconButton
              iconColor="primary"
              icon="ri-heart-fill"
              onPress={onPressFavorites}
            />
          ),
        }}
      />

      <FlashList
        data={movies}
        estimatedItemSize={114}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={loadMore}
        renderItem={renderItem}
        extraData={favoriteMovies}
      />
    </StyledView>
  );
};

export default Home;
