// SERVICES
import { supabase } from "@/services";

export const getAllWatchlist = async () => {
  try {
    const { data: watchlist, error } = await supabase
      .from("watchlist")
      .select("*");

    if (error) throw error;

    return watchlist;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteWatchlist = async (tmdbID: number) => {
  try {
    const { error } = await supabase
      .from("watchlist")
      .delete()
      .eq("tmdbID", tmdbID);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
