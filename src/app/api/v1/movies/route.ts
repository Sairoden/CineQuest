// NEXT
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") ?? "1";
    const query = searchParams.get("query");

    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
};
