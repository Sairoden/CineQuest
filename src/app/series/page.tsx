export const dynamic = "force-dynamic";
export const revalidate = 0;

// REACT
import { Suspense } from "react";

// COMPONENTS
import { SeriesContent, LoadingSpinner } from "@/components";

export default function SeriesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SeriesContent />
    </Suspense>
  );
}
