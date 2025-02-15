export const dynamic = "force-dynamic";
export const revalidate = 0;

// REACT
import { Suspense } from "react";

// COMPONENTS
import { LoadingSpinner, WatchlistContent } from "@/components";

export default function WatchlistPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WatchlistContent />
    </Suspense>
  );
}
