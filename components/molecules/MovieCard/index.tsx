import { IconButton, MoviePoster } from "@/components/atoms";
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from "@/components/styled";
import InlineDivider from "./InlineDivider";
import t from "@/localization";

interface MovieCardProps {
  onPress: () => void;
  onFavoritePress: () => void;
  imageUri: string;
  title: string;
  genre: string;
  rating: number | string;
  year: string;
  summary: string;
  isFavorite?: boolean;
}

const MovieCard = ({
  onPress,
  onFavoritePress,
  imageUri,
  title,
  genre,
  rating,
  year,
  summary,
  isFavorite,
}: MovieCardProps) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledView
        backgroundColor="bgHighlight"
        borderRadius="l"
        p="6px"
        borderWidth="1px"
        borderColor="border"
        flexDirection="row"
      >
        <MoviePoster
          size="thumbnail"
          source={{
            uri: imageUri,
          }}
        />

        <StyledView flex="1" ml="12px">
          <StyledText fontFamily="bold" fontSize="n">
            {title}
          </StyledText>
          <StyledView
            flexDirection="row"
            gap="4px"
            mb="6px"
            alignItems="baseline"
          >
            <StyledText color="textSecondary">{genre}</StyledText>
            <InlineDivider />
            <StyledText color="textSecondary">{year}</StyledText>
            <InlineDivider />
            <StyledText color="textSecondary">
              {t("imdb")} {rating}
            </StyledText>
          </StyledView>
          <StyledText numberOfLines={3}>{summary}</StyledText>
        </StyledView>
        <IconButton
          onPress={onFavoritePress}
          isNaked={true}
          icon="ri-heart-3-fill"
          iconColor={isFavorite ? "textPrimary" : "border"}
        />
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default MovieCard;
