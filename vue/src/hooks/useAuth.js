import { useRouter } from "vue-router";
import { login, register } from "../../../react/src/service/auth";
import { useMutation } from '@tanstack/vue-query'

export function useAuth () {
  const router = useRouter();
  const { mutate: loginMutate, isPending: isLoggingIn, error: loginError } = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push("/home");
    },
  });

  const { mutate: registerMutate, isPending: isRegistering, error: registerError } = useMutation({
    mutationFn: ({ username, name, email, password }) => register(username, name, email, password),
    onSuccess: () => {
      router.push("/signin");
    },
  });


  return { 
      loginMutate,
      isLoggingIn, 
      loginError,
      registerMutate,
      isRegistering,
      registerError
    };
}
