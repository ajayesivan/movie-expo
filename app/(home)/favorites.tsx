import { IconButton, ItemSeparator } from "@/components/atoms";
import { MovieCard } from "@/components/molecules";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import useMovieStore from "@/store";
import { Movie } from "@/types/movie";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { Stack } from "expo-router";
import { useCallback } from "react";

const Favorites = () => {
  const { favoriteMovies, toggleFavoriteMovie, updateSelectedMovie } =
    useMovieStore((state) => state);

  const onPressMovie = useCallback(
    (movie: Movie) => {
      updateSelectedMovie(movie);
      router.push("/(home)/movie");
    },
    [updateSelectedMovie]
  );

  const onToggleFavorite = useCallback(
    (movie: Movie) => {
      toggleFavoriteMovie(movie);
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
        onFavoritePress={() => onToggleFavorite(item)}
        overview={item.overview}
        shouldShowUnfavoriteIcon
        onPress={() => onPressMovie(item)}
      />
    ),
    [onPressMovie, onToggleFavorite]
  );

  return (
    <StyledView flex={1} p="20px">
      <Stack.Screen
        options={{
          title: t("favorites"),
          headerRight: () => (
            <IconButton
              iconColor="primary"
              icon="ri-home-fill"
              onPress={router.back}
            />
          ),
        }}
      />
      <FlashList
        data={favoriteMovies}
        estimatedItemSize={114}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </StyledView>
  );
};

export default Favorites;
