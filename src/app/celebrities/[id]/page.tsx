"use client";

// COMPONENTS
import { LoadingSpinner, CelebrityMedia, CelebrityDetails } from "@/components";

// HOOKS
import { useGetPeople } from "@/hooks";

export default function CelebrityDetailsPage() {
  const { data: celebrity, isPending } = useGetPeople();

  if (isPending) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] text-white py-28">
      <div className="container mx-auto px-4 py-16">
        <CelebrityDetails celebrity={celebrity} />

        <CelebrityMedia celebrity={celebrity} />
      </div>
    </div>
  );
}
