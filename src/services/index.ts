// MOVIES
import { getAllMovies, getTrendingMovies, getMovie } from "./apiMovies";
export { getAllMovies, getTrendingMovies, getMovie };

// PEOPLE
import { getPopularPeople } from "./apiPeople";
export { getPopularPeople };

// SERIES
import { getAllSeries, getTopRatedSeries, getSeries } from "./apiSeries";
export { getAllSeries, getTopRatedSeries, getSeries };

// AUTH
import { loginWithGoogle, logout, getCurrentUser } from "./apiAuth";
export { loginWithGoogle, logout, getCurrentUser };

export { default as supabase } from "./supabase";
