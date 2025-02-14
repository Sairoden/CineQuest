// REACT
import { useEffect } from "react";

// LIBRARIES
import { useMutation, useQuery } from "@tanstack/react-query";

// SERVICES
import {
  loginWithGoogle as loginWithGoogleApi,
  logout as logoutApi,
  getCurrentUser,
} from "@/services";

import { usePathname, useRouter } from "next/navigation";

export const useLoginWithGoogle = () => {
  const { mutate: loginWithGoogle, isPending } = useMutation({
    mutationFn: loginWithGoogleApi,
  });

  return { loginWithGoogle, isPending };
};

export const useLogout = () => {
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      window.location.href = "/";
    },
  });

  return { logout, isPending };
};

export const useGetCurrentUser = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: user = {}, isPending } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  useEffect(() => {
    if (user && pathname === "/login") {
      router.push("/");
    }
  }, [pathname, router, user]);

  return { user, isPending };
};
