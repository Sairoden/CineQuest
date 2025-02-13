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
