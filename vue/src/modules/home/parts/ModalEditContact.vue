<script setup>
import { defineEmits, ref, defineProps } from 'vue';
import { useContact } from '../../../hooks/useContact';
import { watch } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  contact: {
    type: Object,
    required: true
  }
})

const formData = ref({
  name: props.contact.name || "",
  email: props.contact.email || "",
  phone: props.contact.phone || "",
})

const { updateContactMutate, isUpdatingContact, updateContactError } = useContact();

const emit = defineEmits(['close']);

function handleSave() {
  updateContactMutate({
    contactId: props.contact.id,
    name: formData.value.name,
    email: formData.value.email,
    phone: formData.value.phone,
  }, {
    onSuccess: () => {
      closeModal();
    }
  })
}

watch(updateContactError, (newError) => {
  if (newError) {
    console.error("Contact service error:", newError);
  }
});

function closeModal() {
  emit('close');
}
</script>

<template>
  <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeModal">
    <div class="relative bg-slate-900/95 border border-slate-800 rounded-xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
      <!-- Top Tech Bar accent -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#42b883] to-transparent"></div>
      
      <!-- Tech Decors -->
      <div class="absolute top-2 right-4 font-mono text-[8px] text-slate-700 select-none">NODE_EDIT_PORT</div>

      <!-- Header -->
      <h2 class="text-xl font-bold font-mono tracking-wider text-white uppercase mb-6 flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-[#42b883] rounded-full shadow-[0_0_6px_#42b883]"></span>
        EDIT_RECORD
      </h2>

      <!-- Form -->
      <form @submit.prevent="handleSave" class="space-y-4">
        <!-- Name Input -->
        <div>
          <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
            <span>FULL_NAME</span>
            <span class="text-slate-600">*REQUIRED</span>
          </label>
          <div class="relative group">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">ID</span>
            <input 
              type="text" 
              required
              class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
              placeholder="Enter record name" 
              v-model="formData.name"
            />
          </div>
        </div>

        <!-- Email Input -->
        <div>
          <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
            <span>EMAIL_ADDRESS</span>
            <span class="text-slate-600">//OPTIONAL</span>
          </label>
          <div class="relative group">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">@</span>
            <input 
              type="email" 
              class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
              placeholder="Enter record email" 
              v-model="formData.email"
            />
          </div>
        </div>

        <!-- Phone Input -->
        <div>
          <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between">
            <span>PHONE_NUMBER</span>
            <span class="text-slate-600">*REQUIRED</span>
          </label>
          <div class="relative group">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">PH</span>
            <input 
              type="text" 
              required
              class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
              placeholder="Enter record phone" 
              v-model="formData.phone"
            />
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-900 mt-6">
          <button 
            type="button" 
            @click="closeModal" 
            class="px-4 py-2 border border-slate-800 text-slate-400 font-mono text-xs uppercase rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200 cursor-pointer"
          >
            CANCEL
          </button>
          
          <button 
            type="submit" 
            class="relative group overflow-hidden bg-gradient-to-r from-[#42b883] to-[#35495e] text-slate-950 font-bold font-mono text-xs uppercase px-5 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(66,184,131,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            :disabled="isUpdatingContact"
          >
            <Icon v-if="isUpdatingContact" icon="line-md:loading-twotone-loop" class="text-slate-950 text-xs" />
            <span>{{ isUpdatingContact ? 'SAVING...' : 'SAVE_CHANGES' }}</span>
          </button>
        </div>
      </form>

      <!-- Error Message -->
      <div 
        v-if="updateContactError" 
        class="mt-4 p-3 bg-red-950/30 border border-red-500/30 rounded-lg text-xs font-mono text-red-400 flex gap-2 items-start"
      >
        <Icon icon="lucide:alert-triangle" class="text-red-500 mt-0.5 shrink-0" />
        <div>
          <div class="font-bold uppercase">SAVE_FAILED</div>
          <div>{{ updateContactError.message || updateContactError }}</div>
        </div>
      </div>
    </div>
  </div>
</template>