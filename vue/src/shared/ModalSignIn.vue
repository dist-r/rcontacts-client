<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  errorMessage: String,
  showModal: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div v-if="props.showModal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    <div class="relative bg-slate-900/95 border border-slate-800 rounded-xl p-6 w-full max-w-sm shadow-[0_0_30px_rgba(0,0,0,0.6)] text-center overflow-hidden">
      <!-- Top Tech Bar accent -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#42b883] to-transparent"></div>
      
      <!-- Tech Decors -->
      <div class="absolute top-2 right-4 font-mono text-[8px] text-slate-700 select-none">AUTH_SHIELD</div>

      <div class="relative inline-block mb-4">
        <div class="absolute inset-0 bg-[#42b883]/20 blur-md rounded-full"></div>
        <Icon icon="lucide:lock" class="text-[#42b883] text-4xl filter drop-shadow-[0_0_4px_rgba(66,184,131,0.4)]" />
      </div>

      <h2 class="text-xl font-bold font-mono tracking-wider text-white uppercase mb-2">
        AUTHENTICATION_REQUIRED
      </h2>
      <p class="text-xs font-mono text-slate-400 uppercase tracking-wide mb-6">
        // Sign in to access directory nodes
      </p>

      <div class="flex flex-col gap-3">
        <router-link 
          to="/signin" 
          class="relative group overflow-hidden bg-gradient-to-r from-[#42b883] to-[#35495e] text-slate-950 font-bold font-mono text-xs uppercase py-3 rounded-lg hover:shadow-[0_0_15px_rgba(66,184,131,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5"
        >
          <span>INITIATE_SIGNIN</span>
        </router-link>
      </div>

      <div 
        v-if="errorMessage" 
        class="mt-4 p-2.5 bg-red-950/30 border border-red-500/25 rounded-lg text-[10px] font-mono text-red-400 flex gap-2 items-start text-left"
      >
        <Icon icon="lucide:alert-triangle" class="text-red-500 mt-0.5 shrink-0 text-xs" />
        <div>{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>