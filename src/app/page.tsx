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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />

        <Carousel />

        <PopularCelebrities />

        <Suspense fallback={<LoadingSpinner />}>
          <TrendingMovies />
        </Suspense>

        <LatestReviews />

        <Newsletter />
      </main>
    </div>
  );
}
