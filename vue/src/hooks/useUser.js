import { getUserProfile } from "../service/user.service";
import { useQuery } from '@tanstack/vue-query'

export function useUser () {
  const token = localStorage.getItem('token');
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
    enabled: !!token,
    retry: false,
  });
  return { user: data, isLoading, error, refetch };
}