import { Image } from "react-native";

const MovieExpoLogo = () => {
  return (
    <Image
      style={{ height: 85, width: 105, resizeMode: "contain" }}
      source={require("@/assets/images/movie-expo-logo.png")}
    />
  );
};

export default MovieExpoLogo;
