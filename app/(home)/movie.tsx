import { StyledText } from "@/components/styled";
import useMovieStore from "@/store";

const Movie = () => {
  const { selectedMovie: movie } = useMovieStore((state) => state);

  return <StyledText>Movie: {movie?.title}</StyledText>;
};

export default Movie;
