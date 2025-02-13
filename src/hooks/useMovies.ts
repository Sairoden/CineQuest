// REACT
import { useEffect } from "react";

// LIBRARIES
import { useQuery, useQueryClient } from "@tanstack/react-query";

// NEXT
import { useSearchParams } from "next/navigation";

// SERVICES
import { getAllMovies, getTrendingMovies } from "@/services";

export const useGetAllMovies = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const page = searchParams.get("page") ?? "1";
  const query = searchParams.get("query") ?? "";

  const { data, isPending } = useQuery({
    queryKey: ["movies", page, query],
    queryFn: () => getAllMovies({ page: +page, query }),
  });

  useEffect(() => {
    const nextPage = String(Number(page) + 1);
    queryClient.prefetchQuery({
      queryKey: ["movies", nextPage],
      queryFn: () => getAllMovies({ page: +nextPage }),
    });

    if (Number(page) > 1) {
      const prevPage = String(Number(page) - 1);
      queryClient.prefetchQuery({
        queryKey: ["movies", prevPage],
        queryFn: () => getAllMovies({ page: +prevPage }),
      });
    }
  }, [page, queryClient]);

  return { data, isPending };
};

export const useGetTrendingMovies = () => {
  const { data, isPending } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  return { data, isPending };
};
