// STYLES
import { FaStar } from "react-icons/fa";

interface MovieOverviewProps {
  movie: {
    title: string;
    vote_average: number;
    status: string;
    overview: string;
  };
}

export default function MovieOverview({ movie }: MovieOverviewProps) {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-400 text-transparent bg-clip-text leading-tight">
          {movie.title}
        </h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl">
            <FaStar className="text-yellow-400 mr-2 text-2xl" />

            <span className="text-3xl font-semibold">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          <span className="text-gray-400">|</span>
          <span className="text-gray-300 text-lg">{movie.status}</span>
        </div>
      </div>

      <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl mb-10">
        <p className="text-gray-300 text-lg leading-relaxed">
          {movie.overview}
        </p>
      </div>
    </>
  );
}
