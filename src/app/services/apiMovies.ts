export const getAllMovies = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/movies`);

    console.log("MY RES", res);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
