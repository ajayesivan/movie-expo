import { StyledText } from "@/components/styled";
import { useLocalSearchParams } from "expo-router";

const Movie = () => {
  const { movieId } = useLocalSearchParams<{ movieId: string }>();

  return <StyledText>Movie: {movieId}</StyledText>;
};

export default Movie;
