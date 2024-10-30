import { StyledImage } from "@/components/styled";

const MovieExpoLogo = () => {
  return (
    <StyledImage
      style={{ height: 85, width: 105 }}
      source={require("@/assets/images/movie-expo-logo.png")}
    />
  );
};

export default MovieExpoLogo;
