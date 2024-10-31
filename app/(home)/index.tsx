import { Button, IconButton, MoviePoster } from "@/components/atoms";
import { MovieCard } from "@/components/molecules";
import { StyledText, StyledView } from "@/components/styled";
import { useClerk } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";

const Home = () => {
  const { signOut } = useClerk();

  const logout = () => {
    signOut();
  };

  const openFavorites = () => {
    router.push("/favorites");
  };

  return (
    // <SafeAreaView>
    <StyledView p="20px">
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

      <Button onPress={logout} label="Logout" />

      <MoviePoster
        size="large"
        source={{
          uri: "https://images.unsplash.com/photo-1724962508958-7a164cf8492f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />

      <MovieCard
        imageUri="https://images.unsplash.com/photo-1724962508958-7a164cf8492f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Nature"
        genre="Thriller"
        year="2024"
        rating="8.8"
        onFavoritePress={() => {}}
        summary="While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him."
        onPress={() => {}}
      />
    </StyledView>
    // </SafeAreaView>
  );
};

export default Home;
