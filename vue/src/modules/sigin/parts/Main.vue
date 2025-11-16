<script setup>

</script>

<template>
  <section class="h-screen flex justify-center items-center">
    <form class="w-96 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Sign In
      </button>

    </form>
  </section>
</template>