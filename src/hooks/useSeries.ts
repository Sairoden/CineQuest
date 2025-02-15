// REACT
import { useEffect } from "react";

// LIBRARIES
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

// NEXT
import { useParams, useSearchParams, useRouter } from "next/navigation";

// SERVICES
import {
  getTopRatedSeries,
  getAllSeries,
  getSeries,
  postSeries as postSeriesApi,
} from "@/services";

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

export const usePostSeries = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: postSeries, isPending } = useMutation({
    mutationFn: (series: {
      title?: string;
      overview: string;
      poster_path: string;
      release_date?: string;
      vote_average: number;
      name?: string;
      first_air_date?: string;
      tmdbID: number;
      userId: string;
      type: string;
    }) => postSeriesApi(series),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
      router.push("/watchlist");
    },
  });

  return { postSeries, isPending };
};
