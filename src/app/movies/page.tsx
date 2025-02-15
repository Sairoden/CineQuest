export const dynamic = "force-dynamic";
export const revalidate = 0;

// REACT
import { Suspense } from "react";

import { MoviesContent, LoadingSpinner } from "@/components";

export default function MoviesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MoviesContent />
    </Suspense>
  );
}
