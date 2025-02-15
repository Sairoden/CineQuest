// STYLES
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaStar,
  FaTheaterMasks,
} from "react-icons/fa";

export default function CelebrityInfo({
  celebrity,
}: {
  celebrity: {
    birthday: string;
    place_of_birth: string;
    known_for_department: string;
    popularity: number;
  };
}) {
  const info = [
    {
      icon: <FaBirthdayCake />,
      label: "Birthday",
      value: celebrity.birthday,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Place of Birth",
      value: celebrity.place_of_birth,
    },
    {
      icon: <FaTheaterMasks />,
      label: "Known For",
      value: celebrity.known_for_department,
    },
    {
      icon: <FaStar />,
      label: "Popularity",
      value: celebrity.popularity && celebrity.popularity.toFixed(1),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {info.map(
        (item, index) =>
          item.value && (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
            >
              <div className="text-[#F76641] text-xl">{item.icon}</div>

              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
}
