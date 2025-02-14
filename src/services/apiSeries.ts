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
