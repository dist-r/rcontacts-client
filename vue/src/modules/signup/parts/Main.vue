<script setup>
import { Icon } from '@iconify/vue';
const emit = defineEmits(['submit']);
import { reactive } from 'vue';

const props = defineProps({
  loading: Boolean,
  error: String
})

const form = reactive({
  username: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleSubmit = () => {
  emit('submit', {
    username: form.username,
    name: form.name,
    email: form.email,
    password: form.password,
    confirmPassword: form.confirmPassword
   });
};

const childSubmit = () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  if (form.username === '' || form.name === '' || form.email === '' || form.password === '' || form.confirmPassword === '') {
    alert('Please fill in all fields!');
    return;
  }

  handleSubmit();

}
</script>

<template>
  <section class="h-screen flex justify-center items-center bg-slate-800">
    <form 
      class="w-96 p-6 border border-gray-300 rounded-lg shadow-lg bg-slate-200"
      @submit.prevent="childSubmit">
      <Icon icon="logos:vue" width="48" height="48" class="mx-auto mb-2 text-green-500" />
      <h2 class="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h2>
      <!-- Username -->
      <div class="mb-4">
        <label for="username" class="block text-green-500 mb-2">Username</label>
        <input
          type="text"
          id="username"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-green-500
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your username"
          v-model="form.username"
        />
      </div>
      <!-- Name -->
      <div class="mb-4">
        <label for="name" class="block text-green-500 mb-2">Name</label>
        <input
          type="text"
          id="name"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-green-500
                 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your name"
          v-model="form.name"
        />
      </div>
      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-green-500 mb-2">Email</label>
        <input
          type="email"
          id="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-green-500
                 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
          v-model="form.email"
        />
      </div>
      <!-- Password -->
      <div class="mb-6">
        <label for="password" class="block text-green-500 mb-2">Password</label>
        <input
          type="password"
          id="password"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-green-500
                 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your password"
          v-model="form.password"
        />
      </div>
      <!-- Confirm Password -->
      <div class="mb-6">
        <label for="confirmPassword" class="block text-green-500 mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg text-green-500
                 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Confirm your password"
          v-model="form.confirmPassword"
        />
      </div>
      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-green-600 text-white py-2 px-4 rounded-lg
               hover:bg-green-700 transition-colors duration-300 shadow-md"
      >
        Sign Up
      </button>
      <div v-if="loading" class="mt-4 text-center text-green-500">
        Registering...
      </div>
      <div v-if="error" class="mt-4 text-center text-red-500">
        {{ error.message }}
      </div>
      <div class="mt-2 text-center">
        <p>Already have an account? <router-link to="/signin" class="text-green-500 hover:underline">Sign In</router-link></p>
      </div>
    </form>
  </section>
</template>