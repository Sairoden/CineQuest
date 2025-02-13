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
