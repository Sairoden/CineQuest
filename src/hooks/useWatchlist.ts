"use client";

// LIBRARIES
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

// SERVICES
import {
  getAllWatchlist,
  deleteWatchlist as deleteWatchlistApi,
} from "@/services";

export const useGetAllWatchlist = () => {
  const { data: watchlist, isPending } = useQuery({
    queryKey: ["watchlist"],
    queryFn: getAllWatchlist,
  });

  return { watchlist, isPending };
};

export const useDeleteWatchlist = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteWatchlist, isPending } = useMutation({
    mutationFn: (tmdbID: number) => deleteWatchlistApi(tmdbID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });

  return { deleteWatchlist, isPending };
};
