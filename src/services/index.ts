// MOVIES
import { getAllMovies, getTrendingMovies, getMovie } from "./apiMovies";
export { getAllMovies, getTrendingMovies, getMovie };

// PEOPLE
import { getPopularPeople } from "./apiPeople";
export { getPopularPeople };

// SERIES
import { getAllSeries, getTopRatedSeries } from "./apiSeries";
export { getAllSeries, getTopRatedSeries };

// AUTH
import { loginWithGoogle, logout, getCurrentUser } from "./apiAuth";
export { loginWithGoogle, logout, getCurrentUser };

export { default as supabase } from "./supabase";
