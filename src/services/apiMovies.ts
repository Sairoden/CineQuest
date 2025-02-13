export const getAllMovies = async ({ page }: { page: number }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/movies?page=${page}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
