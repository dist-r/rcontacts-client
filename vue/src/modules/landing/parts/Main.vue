<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <main class="relative pt-16">
    <!-- Dynamic Neon Background Glows -->
    <div class="absolute top-20 left-10 md:left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#42b883]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse"></div>
    <div class="absolute top-80 right-10 md:right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse" style="animation-delay: 2.5s;"></div>

    <!-- Hero Section -->
    <section class="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative z-10 pt-16 md:pt-24">
      <div class="container mx-auto max-w-5xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[#42b883] text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg">
          <span class="w-2 h-2 rounded-full bg-[#42b883] animate-ping"></span>
          Built for Vue 3 Composition API
        </div>

        <h2 class="text-4xl md:text-7xl font-black tracking-tight mb-6 leading-tight select-none" style="font-family: 'Orbitron', sans-serif;">
          A Elegant Contact Manager <br class="hidden md:inline" />
          For <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#42b883] via-emerald-300 to-[#35495e] font-extrabold bg-[length:200%_auto] animate-[shiny_5s_linear_infinite]">Developers</span>
        </h2>

        <p class="text-base md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience reactive contact organization built with Vue 3 Composition API, TanStack Query caching, and clean cyberpunk layouts.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <router-link 
            to="/signup" 
            class="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-gradient-to-r from-[#42b883] to-[#35495e] hover:from-[#33a06f] hover:to-[#2c3e50] text-white font-bold rounded-xl text-md transition-all duration-300 shadow-xl shadow-[#42b883]/15 hover:shadow-[#42b883]/25 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started For Free
          </router-link>
          <router-link 
            to="/signin" 
            class="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold rounded-xl text-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign In to Account
          </router-link>
        </div>

        <!-- Interactive Cyber Mockup Preview -->
        <div class="relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-3 md:p-4 shadow-[0_0_50px_rgba(66,184,131,0.08)] transform hover:scale-[1.01] transition-transform duration-500 group">
          <!-- Glow border line on top -->
          <div class="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#42b883] to-transparent"></div>
          
          <div class="rounded-xl overflow-hidden bg-slate-950 border border-slate-900">
            <!-- Terminal / Window Title Bar -->
            <div class="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-900">
              <div class="flex gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <div class="text-xs text-slate-500 tracking-wider flex items-center gap-1.5" style="font-family: 'JetBrains Mono', monospace;">
                <Icon icon="mdi:code-tags" class="text-[#42b883]" />
                src/composables/useContact.js
              </div>
              <span class="text-[10px] bg-slate-800 text-[#42b883] px-2 py-0.5 rounded font-bold uppercase">v3.5</span>
            </div>

            <!-- Mockup Split Panel -->
            <div class="grid grid-cols-1 md:grid-cols-2 text-left">
              <!-- Left Side: Code block preview -->
              <div class="p-4 md:p-6 bg-slate-950 text-xs text-slate-400 border-b md:border-b-0 md:border-r border-slate-900 select-none overflow-x-auto" style="font-family: 'JetBrains Mono', monospace;">
                <div class="text-slate-500 mb-2">// Vue 3 Composition API pattern</div>
                <div>
                  <span class="text-purple-400">import</span> { <span class="text-[#42b883]">ref</span>, <span class="text-[#42b883]">computed</span> } <span class="text-purple-400">from</span> <span class="text-amber-400">'vue'</span>
                </div>
                <div class="mt-2">
                  <span class="text-purple-400">export function</span> <span class="text-[#42b883]">useContacts</span>() &#123;
                </div>
                <div class="pl-4">
                  <span class="text-purple-400">const</span> contacts = <span class="text-[#42b883]">ref</span>([])
                </div>
                <div class="pl-4">
                  <span class="text-purple-400">const</span> count = <span class="text-[#42b883]">computed</span>(() =&gt;
                </div>
                <div class="pl-8">
                  contacts.value.<span class="text-amber-400">length</span>
                </div>
                <div class="pl-4">)</div>
                <div class="pl-4">
                  <span class="text-purple-400">return</span> &#123; contacts, count &#125;
                </div>
                <div>&#125;</div>
              </div>

              <!-- Right Side: Visual App Mockup -->
              <div class="p-6 bg-slate-900/40 relative flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-sm font-bold text-white">Contacts (3)</h4>
                    <span class="text-[10px] text-[#42b883] bg-[#42b883]/10 px-2 py-0.5 rounded-full font-bold">Sync Active</span>
                  </div>
                  
                  <!-- Search Mockup -->
                  <div class="w-full bg-slate-950/80 border border-slate-800 rounded-lg py-1.5 px-3 text-xs text-slate-500 mb-4 flex items-center">
                    Search contacts...
                  </div>

                  <!-- Contact Cards Mockup -->
                  <div class="space-y-2">
                    <div class="p-3 bg-slate-900 border border-slate-800/80 rounded-lg flex items-center justify-between">
                      <div>
                        <div class="text-xs font-bold text-white">Rizki Ramadhan</div>
                        <div class="text-[10px] text-slate-500">rizki@contacts.com</div>
                      </div>
                      <span class="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">Mobile</span>
                    </div>
                    <div class="p-3 bg-slate-900/60 border border-slate-800/40 rounded-lg flex items-center justify-between opacity-75">
                      <div>
                        <div class="text-xs font-bold text-white">Alice Johnson</div>
                        <div class="text-[10px] text-slate-500">alice@developer.com</div>
                      </div>
                      <span class="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (Features Grid) -->
    <section class="py-24 bg-slate-950 border-t border-slate-900/50 relative z-10">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h3 class="text-xs font-semibold text-[#42b883] tracking-widest uppercase mb-3">Enterprise Standard</h3>
        <h2 class="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight" style="font-family: 'Orbitron', sans-serif;">
          Designed For High-Speed Workflows
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <!-- Feature 1 -->
          <div class="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#42b883]/30 hover:shadow-[0_0_30px_rgba(66,184,131,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-[#42b883]/10 text-[#42b883] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="mdi:folder-multiple" class="text-2xl" />
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Smart Organization</h4>
            <p class="text-slate-400 leading-relaxed text-sm">
              Add, update, or search your professional network dynamically using instant queries and a clean single-page dashboard.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="mdi:shield-lock" class="text-2xl" />
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Bank-Level Security</h4>
            <p class="text-slate-400 leading-relaxed text-sm">
              Enforces complete encryption verification and secure auth tokens to protect your contact data with maximum privacy.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="mdi:access-point" class="text-2xl" />
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Global Sync State</h4>
            <p class="text-slate-400 leading-relaxed text-sm">
              Never suffer state lag. Access robust cache invalidation networks to ensure instantaneous updates on any client viewport.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Showcase -->
    <section class="py-20 border-t border-slate-900/50 bg-slate-900/10 relative z-10">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h3 class="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-8">Powering the Application</h3>
        
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-75 hover:opacity-100 transition-opacity">
          <div class="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
            <Icon icon="logos:vue" class="text-sm" />
            <span class="text-xs font-semibold text-slate-400" style="font-family: 'JetBrains Mono', monospace;">Vue 3.5</span>
          </div>
          <div class="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
            <Icon icon="mdi:database" class="text-[#42b883] text-sm" />
            <span class="text-xs font-semibold text-slate-400" style="font-family: 'JetBrains Mono', monospace;">TanStack Query</span>
          </div>
          <div class="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
            <Icon icon="logos:tailwindcss-icon" class="text-sm" />
            <span class="text-xs font-semibold text-slate-400" style="font-family: 'JetBrains Mono', monospace;">Tailwind v4</span>
          </div>
          <div class="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
            <Icon icon="logos:vitejs" class="text-sm" />
            <span class="text-xs font-semibold text-slate-400" style="font-family: 'JetBrains Mono', monospace;">Vite 7</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic CTA Banner -->
    <section class="py-24 relative z-10 px-4">
      <div class="container mx-auto max-w-4xl bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <!-- Glowing bubble within CTA -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#42b883]/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div class="relative z-10 max-w-xl mx-auto space-y-6">
          <h3 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight" style="font-family: 'Orbitron', sans-serif;">
            Ready to organize your network?
          </h3>
          <p class="text-slate-400 leading-relaxed text-sm md:text-base">
            Join developer networks globally using RContacts. Setup is entirely free, quick, and built for modern speeds.
          </p>
          <div class="pt-4">
            <router-link 
              to="/signup" 
              class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#42b883] to-[#35495e] hover:from-[#33a06f] hover:to-[#2c3e50] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(66,184,131,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Create Your Free Account
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>