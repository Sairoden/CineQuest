export const GET = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
      { error: "Failed to fetch popular series" },
      { status: 500 }
    );
  }
};
