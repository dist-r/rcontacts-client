<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <header class="bg-[#35495e] bg-opacity-75 backdrop-blur-md text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold tracking-wider">RContacts</h1>
        <nav>
          <router-link to="/signin" class="text-gray-300 hover:text-white mr-4 transition-colors duration-300 font-bold">
            <Icon icon="mingcute:square-arrow-right-line" class="inline-block size-8" />
            Sign In
          </router-link>
          <router-link to="/signup" class="bg-[#42b883] hover:bg-[#33a06f] text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Icon icon="mingcute:user-add-2-fill" class="inline-block mr-1" />
            Sign Up
          </router-link>
        </nav>
      </div>
    </header>
</template>