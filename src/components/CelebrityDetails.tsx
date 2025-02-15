// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import {
  CelebrityPoster,
  CelebrityInfo,
  CelebrityBiography,
} from "@/components";

interface CelebrityDetailsProps {
  celebrity: {
    name: string;
    birthday: string;
    place_of_birth: string;
    known_for_department: string;
    popularity: number;
    biography: string;
    profile_path: string | null;
  };
}

export default function CelebrityDetails({ celebrity }: CelebrityDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <CelebrityPoster celebrity={celebrity} />

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="md:w-2/3"
      >
        <h1 className="text-4xl font-bold mb-6">{celebrity.name}</h1>

        <CelebrityInfo celebrity={celebrity} />

        <CelebrityBiography celebrity={celebrity} />
      </motion.div>
    </div>
  );
}
