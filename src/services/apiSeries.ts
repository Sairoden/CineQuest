// SERVICES
import { supabase } from "@/services";

export const getAllSeries = async ({
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
      }/api/v1/series?${searchParams.toString()}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTopRatedSeries = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/series/topRatedSeries`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSeries = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/series/${id}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postSeries = async (series: {
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
    console.log("MY series", series);

    const { error } = await supabase.from("watchlist").insert(series);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
