// NEXT
import Image from "next/image";

// STYLES
import { FaFilm } from "react-icons/fa";

interface MovieProductionProps {
  movie: {
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
    }[];
  };
}

export default function MovieProduction({ movie }: MovieProductionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-6">Production Companies</h2>

      <div className="flex flex-wrap gap-6">
        {movie.production_companies.map(
          (company: { id: number; logo_path: string | null; name: string }) => (
            <div
              key={company.id}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl flex items-center space-x-4 hover:bg-black/30 transition-all duration-300"
            >
              {company.logo_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              ) : (
                <FaFilm className="text-[#F76641] text-3xl" />
              )}

              <span className="font-medium text-lg">{company.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
