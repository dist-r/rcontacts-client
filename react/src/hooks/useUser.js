import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../service/user";
import { useNavigate } from "react-router";

export function useUser() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const {
    data: profile,
    isLoading: isLoadingProfile,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(token),
    enabled: !!token,
    retry: false,
  });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return { profile, isLoadingProfile, error, logout };
}
