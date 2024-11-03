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
  rating: number | string;
  year: string;
  overview: string;
  isFavorite?: boolean;
  shouldShowUnfavoriteIcon?: boolean;
}

const MovieCard = ({
  onPress,
  onFavoritePress,
  imageUri,
  title,
  rating,
  year,
  overview,
  isFavorite,
  shouldShowUnfavoriteIcon,
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
          <StyledText fontFamily="bold" fontSize="n" numberOfLines={1}>
            {title}
          </StyledText>
          <StyledView
            flexDirection="row"
            gap="4px"
            mb="6px"
            alignItems="baseline"
          >
            <StyledText color="textSecondary">{year}</StyledText>
            <InlineDivider />
            <StyledText color="textSecondary">
              {t("imdb")} {rating}
            </StyledText>
          </StyledView>
          <StyledText numberOfLines={3}>{overview}</StyledText>
        </StyledView>
        {shouldShowUnfavoriteIcon ? (
          <IconButton
            onPress={onFavoritePress}
            isNaked={true}
            icon="ri-dislike-fill"
            iconColor="textPrimary"
          />
        ) : (
          <IconButton
            onPress={onFavoritePress}
            isNaked={true}
            icon="ri-heart-3-fill"
            iconColor={isFavorite ? "favorite" : "border"}
          />
        )}
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default MovieCard;
