<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 font-sans relative overflow-hidden px-4">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <!-- Main Card -->
    <div class="relative max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center overflow-hidden">
      <!-- Top Tech Bar accent -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <!-- Tech Decors -->
      <div class="absolute top-2 right-4 font-mono text-[8px] text-red-500/40 select-none">ERROR_CODE_404</div>
      <div class="absolute bottom-2 right-4 font-mono text-[8px] text-slate-700 select-none">//SYS_UNRESOLVED</div>

      <div class="flex flex-col items-center gap-5">
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-red-500/20 blur-md rounded-full"></div>
          <Icon icon="logos:vue" width="56" height="56" class="relative z-10 filter grayscale contrast-200" />
        </div>
        
        <h1 class="text-7xl font-extrabold font-mono text-red-500 tracking-wider filter drop-shadow-[0_0_10px_rgba(239,68,68,0.4)] animate-pulse">404</h1>
        
        <div class="space-y-1.5 font-mono">
          <h2 class="text-sm font-bold uppercase text-white tracking-widest">ROUTE_NOT_FOUND</h2>
          <p class="text-xs text-slate-500 uppercase">// REQUESTED_ENDPOINT_DOES_NOT_EXIST</p>
        </div>

        <router-link
          to="/"
          class="mt-4 relative group overflow-hidden bg-gradient-to-r from-red-600 to-red-950 text-white font-bold font-mono text-xs uppercase px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span class="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
          <span>RETURN_TO_GRID</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped overrides if needed */
</style>
