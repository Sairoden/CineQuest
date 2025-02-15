// MOVIES
import {
  getAllMovies,
  getTrendingMovies,
  getMovie,
  postMovie,
} from "./apiMovies";
export { getAllMovies, getTrendingMovies, getMovie, postMovie };

// PEOPLE
import { getPopularPeople } from "./apiPeople";
export { getPopularPeople };

// SERIES
import {
  getAllSeries,
  getTopRatedSeries,
  getSeries,
  postSeries,
} from "./apiSeries";
export { getAllSeries, getTopRatedSeries, getSeries, postSeries };

// AUTH
import { loginWithGoogle, logout, getCurrentUser } from "./apiAuth";
export { loginWithGoogle, logout, getCurrentUser };

// WATCHLIST
import { getAllWatchlist, deleteWatchlist } from "./apiWatchlist";
export { getAllWatchlist, deleteWatchlist };

export { default as supabase } from "./supabase";
