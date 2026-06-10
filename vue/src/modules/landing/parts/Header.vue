<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <header class="bg-slate-950/70 backdrop-blur-md text-white p-4 border-b border-slate-900 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1.5 relative group">
          <Icon icon="logos:vue" width="32" height="32" class="group-hover:scale-110 transition-transform" />
          <!-- Glowing aura -->
          <div class="absolute -inset-2 bg-[#42b883]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h1 class="text-xl md:text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#42b883] select-none" style="font-family: 'Orbitron', sans-serif;">
          RContacts
        </h1>
      </div>
      <nav class="flex items-center space-x-3">
        <router-link 
          to="/signin" 
          class="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-300 text-sm font-semibold flex items-center gap-1.5"
        >
          <Icon icon="mingcute:square-arrow-right-line" class="text-xs" />
          Sign In
        </router-link>
        <router-link 
          to="/signup" 
          class="bg-gradient-to-r from-[#42b883] to-[#35495e] hover:from-[#33a06f] hover:to-[#2c3e50] text-white font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 shadow-md shadow-[#42b883]/10 hover:shadow-[#42b883]/20 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
        >
          <Icon icon="mingcute:user-add-2-fill" class="text-xs" />
          Sign Up
        </router-link>
      </nav>
    </div>
  </header>
</template>