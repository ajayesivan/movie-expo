const TMDB_IMAGE_URL_BASE = "https://image.tmdb.org/t/p/";

export const generateTmdbImageUrl = (
  imagePath: string,
  width: number
): string => {
  const imagePathWithSlash = imagePath[0] === "/" ? imagePath : "/" + imagePath;

  return `${TMDB_IMAGE_URL_BASE}/w${width}${imagePathWithSlash}`;
};

export const TMDB_MOVIE_LISTS_POPULAR = "/movie/popular";
