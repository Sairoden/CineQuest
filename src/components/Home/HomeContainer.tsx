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

export default function HomeContainer() {
  return (
    <>
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <Carousel />
        <PopularCelebrities />
        <TrendingMovies />
      </Suspense>

      <LatestReviews />

      <Newsletter />
    </>
  );
}
