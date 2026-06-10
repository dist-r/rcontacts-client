<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="relative bg-slate-950 text-slate-100 py-16 border-t border-slate-900 overflow-hidden font-sans">
    <!-- Ambient glow behind footer -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#42b883]/5 blur-[80px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <div>
        <h3 class="text-xl font-bold font-mono tracking-wider mb-4 text-white flex items-center justify-center md:justify-start gap-2">
          <span class="w-2 h-2 bg-[#42b883] rounded-full shadow-[0_0_8px_#42b883] animate-pulse"></span>
          RCONTACTS
        </h3>
        <p class="text-slate-400 text-sm leading-relaxed">
          Your digital rolodex, reimagined for the cyberpunk era. Secure, decentralized, fast.
        </p>
      </div>
      <div>
        <h3 class="text-xs font-bold font-mono tracking-widest uppercase text-slate-500 mb-4">Navigate</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <router-link to="/home" class="text-slate-400 hover:text-[#42b883] transition-colors duration-200 flex items-center justify-center md:justify-start gap-1 group">
              <span class="text-transparent group-hover:text-[#42b883] transition-colors duration-200 font-mono text-xs">&gt;</span> Home
            </router-link>
          </li>
          <li>
            <router-link to="/signup" class="text-slate-400 hover:text-[#42b883] transition-colors duration-200 flex items-center justify-center md:justify-start gap-1 group">
              <span class="text-transparent group-hover:text-[#42b883] transition-colors duration-200 font-mono text-xs">&gt;</span> Sign Up
            </router-link>
          </li>
          <li>
            <router-link to="/signin" class="text-slate-400 hover:text-[#42b883] transition-colors duration-200 flex items-center justify-center md:justify-start gap-1 group">
              <span class="text-transparent group-hover:text-[#42b883] transition-colors duration-200 font-mono text-xs">&gt;</span> Sign In
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-bold font-mono tracking-widest uppercase text-slate-500 mb-4">Legal</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="text-slate-400 hover:text-[#42b883] transition-colors duration-200 flex items-center justify-center md:justify-start gap-1 group">
              <span class="text-transparent group-hover:text-[#42b883] transition-colors duration-200 font-mono text-xs">&gt;</span> Terms of Service
            </a>
          </li>
          <li>
            <a href="#" class="text-slate-400 hover:text-[#42b883] transition-colors duration-200 flex items-center justify-center md:justify-start gap-1 group">
              <span class="text-transparent group-hover:text-[#42b883] transition-colors duration-200 font-mono text-xs">&gt;</span> Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-bold font-mono tracking-widest uppercase text-slate-500 mb-4">Connect</h3>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#42b883] hover:border-[#42b883]/40 hover:shadow-[0_0_10px_rgba(66,184,131,0.2)] transition-all duration-300">
            <Icon icon="fa-brands:github" :style="{ fontSize: '20px' }" />
          </a>
          <a href="#" class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#42b883] hover:border-[#42b883]/40 hover:shadow-[0_0_10px_rgba(66,184,131,0.2)] transition-all duration-300">
            <Icon icon="fa-brands:twitter" :style="{ fontSize: '20px' }" />
          </a>
          <a href="#" class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#42b883] hover:border-[#42b883]/40 hover:shadow-[0_0_10px_rgba(66,184,131,0.2)] transition-all duration-300">
            <Icon icon="fa-brands:linkedin" :style="{ fontSize: '20px' }" />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t border-slate-900/60 pt-8 text-center text-xs font-mono text-slate-500">
      <p>&copy; 2026 RContacts. All system threads active.</p>
    </div>
  </footer>
</template>