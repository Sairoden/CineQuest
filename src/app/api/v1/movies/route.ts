const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzljMzMyZDUzZWJlMDk1OTRjNTNjMjllZThjMTRlZCIsIm5iZiI6MTY5MjE3ODI3OC44MTEsInN1YiI6IjY0ZGM5NzY2MzcxMDk3MDEzOTQ2ZmYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e1j50qPYmQZrC8fV67fvEdNN9eGTB0070cQ9XbyXmxI",
  },
};

export const GET = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    console.error(err);
  }
};
