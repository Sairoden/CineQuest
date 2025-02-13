"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { RiVipCrownFill } from "react-icons/ri";
import { FaChartLine, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy Data
const celebrities = [
  {
    id: 1,
    name: "Tom Cruise",
    profile_path: "/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg",
    popularity: 98.5,
    known_for_department: "Acting",
  },
  {
    id: 2,
    name: "Margot Robbie",
    profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
    popularity: 95.2,
    known_for_department: "Acting",
  },
  {
    id: 3,
    name: "Ryan Gosling",
    profile_path: "/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg",
    popularity: 94.8,
    known_for_department: "Acting",
  },
  {
    id: 4,
    name: "Emma Stone",
    profile_path: "/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg",
    popularity: 93.7,
    known_for_department: "Acting",
  },
  {
    id: 5,
    name: "Leonardo DiCaprio",
    profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
    popularity: 92.4,
    known_for_department: "Acting",
  },
];

export default function PopularCelebrities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-[1536px]">
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RiVipCrownFill className="text-4xl text-[#F76641]" />

          <h2 className="text-4xl font-bold text-white">Popular Celebrities</h2>
        </motion.div>

        <div className="px-8 md:px-10">
          <Slider {...settings}>
            {celebrities.map((celebrity, index) => (
              <div key={celebrity.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[#F76641]/20"
                >
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={
                        celebrity.profile_path
                          ? `https://image.tmdb.org/t/p/w500${celebrity.profile_path}`
                          : "/noProfile.png"
                      }
                      alt={celebrity.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 
                             (max-width: 1024px) 50vw, 
                             (max-width: 1280px) 33vw,
                             25vw"
                      className="object-cover"
                      priority={index < 4}
                    />

                    <div className="absolute top-4 right-4 bg-[#F76641] rounded-full px-3 py-1 flex items-center gap-1">
                      <FaChartLine className="text-yellow-300" />

                      <span className="text-white font-semibold">
                        {celebrity.popularity.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                      {celebrity.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {celebrity.known_for_department}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 bg-[#F76641] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300 font-semibold"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#F76641] p-3 rounded-full z-10 hover:bg-[#d54d2d] transition-colors duration-300"
  >
    <FaChevronRight className="text-white text-xl" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#F76641] p-3 rounded-full z-10 hover:bg-[#d54d2d] transition-colors duration-300"
  >
    <FaChevronLeft className="text-white text-xl" />
  </button>
);
