// REACT
import { useEffect } from "react";

// LIBRARIES
import { useQuery, useQueryClient } from "@tanstack/react-query";

// NEXT
import { useSearchParams } from "next/navigation";

// SERVICES
import { getAllMovies } from "@/services";

export const useGetAllMovies = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const page = searchParams.get("page") ?? "1";

  const { data, isPending } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getAllMovies({ page: +page }),
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
