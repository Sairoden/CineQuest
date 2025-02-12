// COMPONENTS
import {
  Hero,
  TrendingMovies,
  PopularCelebrities,
  TopBoxOffice,
  LatestReviews,
  Newsletter,
} from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <TrendingMovies />
        <PopularCelebrities />
        <TopBoxOffice />
        <LatestReviews />
        <Newsletter />
        {/* <TrendingMovies />
        <PopularCelebrities />
        <TopBoxOffice />
        <LatestReviews />
        <Newsletter /> */}
      </main>
    </div>
  );
}
