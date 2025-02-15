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

// TO DO
// 1. REMOVE WATCH LIST
// 2. IF THERE IS NO MOVIE FOUND, DISPLAY SOMETHING ELSE
// 3. FILTERS IF THERE IS STILL TIME
// 4. Watchlist details connect to specific details page
