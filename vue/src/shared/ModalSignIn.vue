<script setup>
 const props = defineProps({
    errorMessage: String,
    showModal: {
      type: Boolean,
      default: false
    }
 });

</script>

<template>
  <div v-if="props.showModal" class="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
    <div class="bg-gray-800 border-2 border-green-500 rounded-lg shadow-lg w-80 p-6 text-center text-white">
      <h2 class="text-2xl font-bold text-green-500 mb-4">Sign In Required</h2>
      <p class="mb-4">Sign in to access this feature.</p>
      <button 
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        <router-link to="/signin" >Go to Sign In</router-link>
      </button>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>