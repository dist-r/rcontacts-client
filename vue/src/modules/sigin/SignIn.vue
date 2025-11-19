  <script setup>
  import Main from './parts/Main.vue';
  import { useAuth } from '../../hooks/useAuth';
import { watch, watchEffect } from 'vue';
import router from '../../routes/router';

  const { loginMutate, isLoggingIn, loginError } = useAuth();

  const handleSubmit = (payload) => {
    loginMutate({
      email: payload.email,
      password: payload.password
    });
  };
  watchEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      // Jika sudah login, redirect ke halaman home
      router.push("/home");
    }
  })
  </script>

  <template>
    <Main 
      @submit="handleSubmit"
      :loading="isLoggingIn"
      :error="loginError"
   />
  </template>
