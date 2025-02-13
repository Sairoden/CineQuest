// LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getPopularPeople } from "@/services";

export const useGetPopularPeople = () => {
  const { data, isPending } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: getPopularPeople,
  });

  return { data, isPending };
};
