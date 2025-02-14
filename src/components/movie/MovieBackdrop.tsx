export default function MovieBackdrop({
  movie,
}: {
  movie: { poster_path: string };
}) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[60vh] opacity-20"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
