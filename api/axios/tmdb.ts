import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Add TMDB API key as EXPO_PUBLIC_TMDB_API_KEY to your .env file"
  );
}

const axiosTmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
  params: { language: "en-US" },
});

export default axiosTmdb;
