import { useMovies } from "@/api/hooks/tmdb";
import { Button, IconButton, MoviePoster } from "@/components/atoms";
import { MovieCard } from "@/components/molecules";
import { StyledView } from "@/components/styled";
import { useClerk } from "@clerk/clerk-expo";
import { router, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";

const Home = () => {
  const { signOut } = useClerk();

  const { movies } = useMovies();

  const logout = () => {
    signOut();
  };

  const openFavorites = () => {
    router.push("/favorites");
  };

  return (
    <StyledView p="20px" flex={1}>
      <Stack.Screen
        options={{
          title: "Hey, Ajay!",
          headerRight: () => (
            <IconButton
              iconColor="primary"
              icon="ri-heart-fill"
              onPress={openFavorites}
            />
          ),
        }}
      />

      {/* <Button onPress={logout} label="Logout" /> */}

      {/* <MoviePoster
        size="large"
        source={{
          uri: "https://images.unsplash.com/photo-1724962508958-7a164cf8492f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      /> */}

      <FlashList
        data={movies}
        estimatedItemSize={114}
        ItemSeparatorComponent={() => <StyledView height="12px" />}
        renderItem={({ item }) => (
          <MovieCard
            imageUri={item.posterThumbnailUrl}
            title={item.title}
            year={item.releaseYear}
            rating={item.rating}
            onFavoritePress={() => {}}
            overview={item.overview}
            onPress={() => {}}
          />
        )}
      />
    </StyledView>
  );
};

export default Home;
