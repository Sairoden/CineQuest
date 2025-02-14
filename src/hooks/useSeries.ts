// REACT
import { useEffect } from "react";

// LIBRARIES
import { useQuery, useQueryClient } from "@tanstack/react-query";

// NEXT
import { useParams, useSearchParams } from "next/navigation";

// SERVICES
import { getTopRatedSeries, getAllSeries, getSeries } from "@/services";

export const useGetAllSeries = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const page = searchParams.get("page") ?? "1";
  const query = searchParams.get("query") ?? "";

  const { data, isPending } = useQuery({
    queryKey: ["series", page, query],
    queryFn: () => getAllSeries({ page: +page, query }),
  });

  useEffect(() => {
    const nextPage = String(Number(page) + 1);
    queryClient.prefetchQuery({
      queryKey: ["series", nextPage],
      queryFn: () => getAllSeries({ page: +nextPage }),
    });

    if (Number(page) > 1) {
      const prevPage = String(Number(page) - 1);
      queryClient.prefetchQuery({
        queryKey: ["series", prevPage],
        queryFn: () => getAllSeries({ page: +prevPage }),
      });
    }
  }, [page, queryClient]);

  return { data, isPending };
};

export const useGetTopRatedSeries = () => {
  const { data, isPending } = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: getTopRatedSeries,
  });

  return { data, isPending };
};

export const useGetSeries = () => {
  const { id } = useParams();
  const seriesId = Array.isArray(id) ? id[0] : id;

  const { data, isPending } = useQuery({
    queryKey: ["singleSeries", id],
    queryFn: () => getSeries(seriesId as string),
  });

  return { data, isPending };
};
