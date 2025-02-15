// REACT
import { Suspense } from "react";

// COMPONENTS
import {
  Hero,
  Carousel,
  PopularCelebrities,
  TrendingMovies,
  LatestReviews,
  Newsletter,
  LoadingSpinner,
} from "@/components";

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />

        <Suspense fallback={<LoadingSpinner />}>
          <Carousel />
          <PopularCelebrities />
          <TrendingMovies />
        </Suspense>

        <LatestReviews />

        <Newsletter />
      </main>
    </div>
  );
}
