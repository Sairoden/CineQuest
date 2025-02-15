// SERVICES
import { supabase } from "@/services";

export const getAllMovies = async ({
  page,
  query,
}: {
  page: number;
  query?: string;
}) => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append("page", String(page));

    if (query) {
      searchParams.append("query", query);
    }

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/api/v1/movies?${searchParams.toString()}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/movies/trendingMovies`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMovie = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/movies/${id}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postMovie = async (movie: {
  title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  vote_average: number;
  name?: string;
  first_air_date?: string;
  tmdbID: number;
  userId: string;
  type: string;
}) => {
  try {
    const { error } = await supabase.from("watchlist").insert(movie);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
