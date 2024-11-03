import { Button, IconButton, MoviePoster } from "@/components/atoms";
import InlineDivider from "@/components/molecules/MovieCard/InlineDivider";
import { StyledImage, StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import useMovieStore from "@/store";
import { router, Stack } from "expo-router";
import { useMemo } from "react";
import { useTheme } from "styled-components/native";

const Movie = () => {
  const {
    selectedMovie: movie,
    favoriteMovies,
    toggleFavoriteMovie,
  } = useMovieStore((state) => state);
  const theme = useTheme();

  const isFavorite = useMemo(
    () => favoriteMovies.some((favMovie) => favMovie.id === movie?.id),
    [favoriteMovies, movie]
  );

  const onPressBack = () => {
    router.back();
  };

  const onToggleFavorite = () => {
    if (!movie) {
      return;
    }
    toggleFavoriteMovie(movie);
  };

  return (
    <StyledView>
      <Stack.Screen options={{ headerShown: false }} />

      <StyledView>
        <StyledImage
          height="200px"
          resizeMode="cover"
          source={{ uri: movie?.backdropUrl }}
        />
        <StyledView
          backgroundColor={theme.colors.backdropOverlay}
          height="200px"
          width="100%"
          style={{ position: "absolute" }}
        />
      </StyledView>

      <StyledView
        style={{ position: "absolute" }}
        width="100%"
        mt="70px"
        alignItems="center"
      >
        <MoviePoster
          style={{
            position: "absolute",
          }}
          size="large"
          source={{ uri: movie?.posterUrl }}
        />
      </StyledView>

      <StyledView p="20px" mt="110px">
        <StyledView flexDirection="row" gap="12px" alignItems="center">
          <IconButton icon="arrow-left-line" onPress={onPressBack} />
          <StyledView>
            <StyledText fontSize="m" fontFamily="bold">
              {movie?.title}
            </StyledText>
            <StyledView
              flexDirection="row"
              gap="4px"
              mb="6px"
              alignItems="baseline"
            >
              <StyledText color="textSecondary">
                {movie?.releaseYear}
              </StyledText>
              <InlineDivider />
              <StyledText color="textSecondary">
                {t("imdb")} {movie?.rating}({movie?.ratingCount})
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        <StyledText mt="16px" mb="40px">
          {movie?.overview}
        </StyledText>

        <Button
          onPress={onToggleFavorite}
          label={t(isFavorite ? "unfavorite" : "favorite")}
        />
      </StyledView>
    </StyledView>
  );
};

export default Movie;
