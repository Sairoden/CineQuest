// route.ts
export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch a movie: ${res.status}`);
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("Error fetching a movie:", err);
    return Response.json({ error: "Failed to fetch a movie" }, { status: 500 });
  }
};
