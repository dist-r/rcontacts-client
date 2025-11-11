import { useMutation } from "@tanstack/react-query";
import { login as loginService, register as registerService } from "../service/auth";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLoggingIn,
    error: loginError,
  } = useMutation({
    mutationFn: ({ email, password }) => loginService(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/home");
    },
  });

  const {
    mutate: register,
    isPending: isRegistering,
    error: registerError,
  } = useMutation({
    mutationFn: ({ username, name, email, password }) =>
      registerService(username, name, email, password),
    onSuccess: () => {
      navigate("/signin");
    },
  });

  return {
    login,
    isLoggingIn,
    loginError,
    register,
    isRegistering,
    registerError,
  };
}
