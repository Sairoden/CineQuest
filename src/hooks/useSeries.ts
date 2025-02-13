// LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getTopRatedSeries } from "@/services";

export const useGetTopRatedSeries = () => {
  const { data, isPending } = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: getTopRatedSeries,
  });

  return { data, isPending };
};
