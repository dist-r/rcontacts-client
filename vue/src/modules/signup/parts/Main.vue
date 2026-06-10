<script setup>
import { reactive, ref } from 'vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits(['submit']);

const props = defineProps({
  loading: Boolean,
  error: [String, Object]
});

const form = reactive({
  username: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const validationErrorModalOpen = ref(false);
const validationErrorMessage = ref('');

const triggerValidationError = (msg) => {
  validationErrorMessage.value = msg;
  validationErrorModalOpen.value = true;
};

const handleSubmit = () => {
  emit('submit', {
    username: form.username,
    name: form.name,
    email: form.email,
    password: form.password,
    confirmPassword: form.confirmPassword
  });
};

const childSubmit = () => {
  if (form.password !== form.confirmPassword) {
    triggerValidationError('Passwords do not match!');
    return;
  }
  if (form.username === '' || form.name === '' || form.email === '' || form.password === '' || form.confirmPassword === '') {
    triggerValidationError('Please fill in all fields!');
    return;
  }
  handleSubmit();
}
</script>

<template>
  <section class="min-h-screen flex justify-center items-center bg-slate-950 relative overflow-hidden font-sans py-12 px-4">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    <!-- Ambient Glowing Orbs -->
    <div class="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#42b883]/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#35495e]/10 blur-[120px] rounded-full pointer-events-none"></div>

    <!-- Main Container -->
    <div class="relative w-full max-w-md z-10">
      <!-- Back to Home Button -->
      <router-link 
        to="/" 
        class="absolute -top-10 left-0 flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#42b883] transition-colors duration-200 group"
      >
        <span class="inline-block transition-transform duration-200 group-hover:-translate-x-1">&lt;-</span> BACK_TO_BASE
      </router-link>

      <!-- Cyber Card -->
      <div class="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <!-- Top Tech Bar accent -->
        <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#42b883] to-transparent"></div>
        
        <!-- Corner Tech Decors -->
        <div class="absolute top-2 right-2 font-mono text-[8px] text-slate-700 select-none">SECURE_NODE_v1.0.4</div>
        <div class="absolute bottom-2 right-4 font-mono text-[8px] text-slate-700 select-none">//R-SYS-STABLE</div>

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="relative inline-block mb-2">
            <!-- Glowing Ring around Logo -->
            <div class="absolute inset-0 bg-[#42b883]/20 blur-md rounded-full"></div>
            <Icon icon="logos:vue" width="50" height="50" class="relative z-10 filter drop-shadow-[0_0_6px_rgba(66,184,131,0.4)]" />
          </div>
          <h2 class="text-2xl font-bold font-mono tracking-widest text-white uppercase">
            SYS_REGISTRATION
          </h2>
          <p class="text-xs font-mono text-slate-500 mt-1 uppercase">// CREATE_IDENTITY</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="childSubmit" class="space-y-4">
          <!-- Username Input -->
          <div>
            <label for="username" class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
              <span>USERNAME</span>
              <span class="text-slate-600">//INPUT_01</span>
            </label>
            <div class="relative group">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">&gt;_</span>
              <input
                type="text"
                id="username"
                required
                class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                placeholder="cyber_ghost"
                v-model="form.username"
              />
            </div>
          </div>

          <!-- Name Input -->
          <div>
            <label for="name" class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
              <span>FULL_NAME</span>
              <span class="text-slate-600">//INPUT_02</span>
            </label>
            <div class="relative group">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">ID</span>
              <input
                type="text"
                id="name"
                required
                class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                placeholder="Case Officer"
                v-model="form.name"
              />
            </div>
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
              <span>EMAIL_ADDRESS</span>
              <span class="text-slate-600">//INPUT_03</span>
            </label>
            <div class="relative group">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">@</span>
              <input
                type="email"
                id="email"
                required
                class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                placeholder="identity@netspace.com"
                v-model="form.email"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
              <span>SECURITY_KEY</span>
              <span class="text-slate-600">//INPUT_04</span>
            </label>
            <div class="relative group">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">***</span>
              <input
                type="password"
                id="password"
                required
                class="w-full pl-12 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                placeholder="••••••••"
                v-model="form.password"
              />
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div>
            <label for="confirmPassword" class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
              <span>CONFIRM_KEY</span>
              <span class="text-slate-600">//INPUT_05</span>
            </label>
            <div class="relative group">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">chk</span>
              <input
                type="password"
                id="confirmPassword"
                required
                class="w-full pl-12 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                placeholder="••••••••"
                v-model="form.confirmPassword"
              />
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full relative group overflow-hidden bg-gradient-to-r from-[#42b883] to-[#35495e] text-slate-950 font-bold font-mono text-sm uppercase py-3 rounded-lg hover:shadow-[0_0_20px_rgba(66,184,131,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              :disabled="loading"
            >
              <!-- Sparkle Effect -->
              <span class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              
              <Icon v-if="loading" icon="line-md:loading-twotone-loop" class="text-slate-950" />
              <span>{{ loading ? 'CREATING_PROFILE...' : 'REGISTER_PROFILE' }}</span>
            </button>
          </div>
        </form>

        <!-- Status Alerts -->
        <div 
          v-if="error" 
          class="mt-5 p-3.5 bg-red-950/30 border border-red-500/30 rounded-lg text-xs font-mono text-red-400 flex gap-2.5 items-start"
        >
          <Icon icon="lucide:alert-triangle" class="text-red-500 mt-0.5 shrink-0" />
          <div>
            <div class="font-bold uppercase mb-0.5">REG_FAILURE</div>
            <div>{{ error.message || error }}</div>
          </div>
        </div>

        <!-- Footer Link -->
        <p class="mt-6 text-center text-xs font-mono text-slate-500 uppercase">
          Already registered? 
          <router-link to="/signin" class="text-[#42b883] hover:underline hover:text-[#42b883]/80 transition-colors">// INITIATE_SESSION</router-link>
        </p>
      </div>
    </div>

    <!-- Validation Error Modal -->
    <div v-if="validationErrorModalOpen" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex justify-center items-center z-50 p-4" @click.self="validationErrorModalOpen = false">
      <div class="relative bg-slate-900/95 border border-red-500/20 rounded-xl p-6 w-full max-w-sm shadow-[0_0_30px_rgba(239,68,68,0.15)] text-center overflow-hidden">
        <!-- Top Tech Bar accent -->
        <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        
        <!-- Tech Decors -->
        <div class="absolute top-2 right-4 font-mono text-[8px] text-red-500/40 select-none">VALIDATION_ERR</div>
        
        <div class="relative inline-block mb-4">
          <div class="absolute inset-0 bg-red-500/20 blur-md rounded-full animate-pulse"></div>
          <Icon icon="lucide:alert-octagon" class="text-red-500 text-4xl filter drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]" />
        </div>

        <h2 class="text-lg font-bold font-mono tracking-wider text-white uppercase mb-2">
          VALIDATION_FAILED
        </h2>
        <p class="text-xs font-mono text-red-400 uppercase tracking-wide mb-6">
          {{ validationErrorMessage }}
        </p>

        <button 
          @click="validationErrorModalOpen = false"
          class="w-full relative group overflow-hidden bg-gradient-to-r from-red-600 to-red-950 text-white font-bold font-mono text-xs uppercase py-2.5 rounded-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>ACKNOWLEDGE</span>
        </button>
      </div>
    </div>
  </section>
</template>