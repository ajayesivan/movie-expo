import { StyledImage } from "@/components/styled";
import { ImageStyle } from "expo-image";
import { ImageSourcePropType, StyleProp } from "react-native";

interface MoviePosterProps {
  size: "thumbnail" | "large" | "medium" | "small";
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

interface Dimensions {
  width: number;
  height: number;
}

const dimensions: Record<MoviePosterProps["size"], Dimensions> = {
  thumbnail: {
    width: 80,
    height: 100,
  },
  large: {
    width: 144,
    height: 240,
  },
  medium: {
    width: 120,
    height: 200,
  },
  small: {
    width: 100,
    height: 166,
  },
};

const MoviePoster = ({
  size = "thumbnail",
  source,
  style,
}: MoviePosterProps) => {
  const isThumbnail = size === "thumbnail";

  return (
    <StyledImage
      style={style}
      borderRadius={isThumbnail ? "s" : "xl"}
      source={source}
      {...dimensions[size]}
    />
  );
};

export default MoviePoster;
