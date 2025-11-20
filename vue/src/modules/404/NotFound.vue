<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-green-100">
    <div class="max-w-lg mx-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-green-100">
      <div class="flex flex-col items-center gap-4">
        <div class="w-20 h-20 flex items-center justify-center rounded-full bg-green-50 text-green-600 shadow-md">
          <Icon icon="logos:vue" width="48" height="48" />
        </div>
        <h1 class="text-6xl font-extrabold text-green-600">404</h1>
        <p class="text-lg text-gray-700">Upsss Page Notfound.</p>
        <p class="text-sm text-gray-500">Maybe the route changed or the page was removed.</p>
        <router-link
          to="/"
          class="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* small visual tweaks if needed */
</style>
