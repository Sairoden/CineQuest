// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";

interface CelebrityMediaProps {
  celebrity: {
    name: string;
    media: {
      title?: string;
      name?: string;
      overview?: string;
      poster_path?: string | null;
    }[];
  };
}

export default function CelebrityMedia({ celebrity }: CelebrityMediaProps) {
  return (
    <>
      {celebrity.media?.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            {celebrity.name}&apos;s Appearances
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {celebrity.media.map(
              (
                media: {
                  title?: string;
                  name?: string;
                  overview?: string;
                  poster_path?: string | null;
                },
                index: number
              ) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden">
                    <Image
                      src={
                        media.poster_path
                          ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
                          : "/noPoster.png"
                      }
                      alt={media.title || "Movie poster"}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                      <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                        {media.title}
                      </h3>

                      {media.overview && (
                        <p className="text-gray-300 text-xs line-clamp-3">
                          {media.overview}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
