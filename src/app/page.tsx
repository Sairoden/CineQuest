import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
// import TrendingMovies from "../components/TrendingMovies";
// import LatestReviews from "../components/LatestReviews";
// import GenresShowcase from "../components/GenresShowcase";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* <Hero />
        <TrendingMovies />
        <LatestReviews />
        <GenresShowcase />
        <Newsletter /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
