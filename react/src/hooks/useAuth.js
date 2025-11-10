import { useMutation } from "@tanstack/react-query";
import { login as loginService, register as registerService } from "../service/auth";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginService(email, password),
    onSuccess: (data) => {
      // Annahme: Das Token wird im Local Storage gespeichert
      localStorage.setItem("token", data.token);
      navigate("/home");
    },
    onError: (err) => {
      console.error(err);
      // Hier könnten Sie eine Benachrichtigung anzeigen
    },
  });

  const { mutate: register, isPending: isRegistering } = useMutation({
    mutationFn: ({ username, name, email, password }) => registerService(username, name, email, password),
    onSuccess: () => {
      navigate("/signin");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return { login, isLoggingIn, register, isRegistering, logout };
}
