import { useMutation } from "@tanstack/react-query";
import {login as loginService, register as registerService} from "../service/auth";
import {useNavigate} from "react-router";

export function useAuth(){
  const navigate = useNavigate();

  const {mutate: login, isPending: isLoggingIn, error: loginError} = useMutation({
    mutationFn: ({email, password}: {email: string, password: string}) => loginService(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/contacts");
    }
  });

  const {mutate: register, isPending: isRegistering, error: registerError} = useMutation({
    mutationFn: ({username, name, email, password}: {username: string, name: string, email: string, password: string}) => registerService(username, name, email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/signin");
    }
  })

  return {
    login,
    isLoggingIn,
    loginError,
    register,
    isRegistering,
    registerError
  }
}