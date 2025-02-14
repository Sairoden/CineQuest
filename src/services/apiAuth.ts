// SERVICES
import { supabase } from "@/services";

// NEXT
import { redirect } from "next/navigation";

export const loginWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/callback`,
      },
    });

    if (data.url) redirect(data.url);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (!data.session) return null;

    if (error) throw error;

    return data.session.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
