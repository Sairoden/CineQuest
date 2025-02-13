export const GET = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
      }
    );

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to fetch trending movies" },
      { status: 500 }
    );
  }
};
