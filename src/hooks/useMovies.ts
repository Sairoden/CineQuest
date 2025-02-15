"use client";

// REACT
import { useEffect } from "react";

// LIBRARIES
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

// NEXT
import { useParams, useSearchParams, useRouter } from "next/navigation";

// SERVICES
import {
  getAllMovies,
  getTrendingMovies,
  getMovie,
  postMovie as postMovieApi,
} from "@/services";

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

export const useGetMovie = () => {
  const { id } = useParams();
  const movieId = Array.isArray(id) ? id[0] : id;

  const { data, isPending } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(movieId as string),
  });

  return { data, isPending };
};

export const usePostMovie = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: postMovie, isPending } = useMutation({
    mutationFn: (movie: {
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
    }) => postMovieApi(movie),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
      router.push("/watchlist");
    },
  });

  return { postMovie, isPending };
};
