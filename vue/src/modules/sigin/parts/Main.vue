<script setup>
import { reactive } from 'vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits(['submit']);

const props = defineProps({
  loading: Boolean,
  error: String
})

const form = reactive({
  email: '',
  password: '',
});

const parentSubmit = () => {
  emit('submit', { ...form });
};

const childSubmit = () => {
  if(form.email === '' || form.password === '') {
    alert('Please fill in all fields!');
    return;
  }
  parentSubmit();
}
</script>

<template>
  <section class="h-screen flex justify-center items-center bg-slate-800">
    <form
      class="w-96 p-6 border bg-white border-gray-300 rounded-lg shadow-lg"
      @submit.prevent="childSubmit"
    >
      <Icon icon="logos:vue" width="48" height="48" class="mx-auto mb-2 text-green-500" />
      <h2 class="text-2xl font-bold mb-6 text-center text-green-500">Sign In</h2>

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

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded-lg 
               hover:bg-green-700 transition-colors shadow-md"
        :disabled="loading"
      >
        Sign In
      </button>
      <div v-if="loading" class="mt-4 text-center text-green-500">
        Logging in...
      </div>
      <div v-if="error" class="mt-4 text-center text-red-500">
        {{ error.message }}
      </div>
      <p class="mt-4 text-center text-gray-600">
        Don't have an account? <router-link to="/signup" class="text-green-500">Sign Up</router-link>
      </p>
    </form>
  </section>
</template>
