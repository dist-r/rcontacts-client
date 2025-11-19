<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <main>
    <section class="h-screen flex flex-col justify-center items-center bg-linear-to-br from-[#35495e] to-[#42b883] text-white text-center">
        <div class="container mx-auto">
          <h2 class="text-6xl font-extrabold mb-4 animate-fade-in-down">Welcome to RContacts</h2>
          <p class="text-xl text-gray-200 mb-8 animate-fade-in-up">The seamless solution to manage your professional network.</p>
          <router-link to="/signup" class="bg-[#42b883] hover:bg-[#33a06f] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
            Get Started For Free
          </router-link>
        </div>
    </section>

    <section class="min-h-screen flex flex-col justify-center bg-[#f0f4f8] py-20">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-16 text-[#35495e]">Why Choose RContacts?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <Icon icon="mdi:folder-multiple" class="inline-block mb-4 text-[#42b883] size-12" />
              <h3 class="text-2xl font-bold mb-4 text-[#35495e]">Smart Organization</h3>
              <p class="text-gray-600">Easily add, edit, and categorize your contacts with a clean, intuitive interface.</p>
            </div>
            <div class="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <Icon icon="mdi:shield-lock" class="inline-block mb-4 text-[#42b883] size-12" />
              <h3 class="text-2xl font-bold mb-4 text-[#35495e]">Bank-Level Security</h3>
              <p class="text-gray-600">Your data is encrypted and stored securely, because your privacy is our priority.</p>
            </div>
            <div class="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <Icon icon="mdi:access-point" class="inline-block mb-4 text-[#42b883] size-12" />
              <h3 class="text-2xl font-bold mb-4 text-[#35495e]">Always Accessible</h3>
              <p class="text-gray-600">Access your contacts from any device, anywhere in the world, anytime.</p>
            </div>
          </div>
        </div>
      </section>
  </main>
</template>