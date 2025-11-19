<script setup>
import { useAuth } from '../../hooks/useAuth';
import Main from './parts/Main.vue';

const { registerMutate, isRegistering, registerError } = useAuth();

const handleSubmit = (payload) => {
  registerMutate({
    username: payload.username,
    name: payload.name,
    email: payload.email,
    password: payload.password
  });
}

</script>

<template>
  <Main 
    @submit="handleSubmit"
    :loading="isRegistering"
    :error="registerError"
  />
</template>