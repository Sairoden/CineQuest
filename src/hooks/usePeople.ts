"use client";

// LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getPopularPeople, getPeople } from "@/services";

// NEXT
import { useParams } from "next/navigation";

export const useGetPopularPeople = () => {
  const { data, isPending } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: getPopularPeople,
  });

  return { data, isPending };
};

export const useGetPeople = () => {
  const { id } = useParams();
  const peopleId = Array.isArray(id) ? id[0] : id;

  const { data, isPending } = useQuery({
    queryKey: ["people", id],
    queryFn: () => getPeople(peopleId as string),
  });

  return { data, isPending };
};
