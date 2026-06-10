<script setup>
import { defineEmits, defineProps } from 'vue';
import { useContact } from '../../../hooks/useContact';
import { Icon } from '@iconify/vue';

const props = defineProps({
  contact: {
    type: Object,
    required: true
  }
});

const { deleteContactMutate, isDeletingContact, deleteContactError } = useContact();

const emit = defineEmits(['close']);

function deleteContact() {
  deleteContactMutate(props.contact.id, {
    onSuccess: () => {
      emit('close');
    }
  });
}

function closeModal() {
  emit('close');
}
</script>

<template>
  <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeModal">
    <div class="relative bg-slate-900/95 border border-red-500/20 rounded-xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(239,68,68,0.15)] overflow-hidden">
      <!-- Top Tech Bar accent -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <!-- Tech Decors -->
      <div class="absolute top-2 right-4 font-mono text-[8px] text-red-500/40 select-none">NODE_PURGE_PORT</div>

      <!-- Header -->
      <h2 class="text-xl font-bold font-mono tracking-wider text-red-400 uppercase mb-4 flex items-center gap-2">
        <Icon icon="lucide:shield-alert" class="text-red-500 text-lg animate-pulse" />
        PURGE_DIRECTORY_RECORD
      </h2>

      <p class="text-slate-300 font-mono text-xs uppercase mb-6 text-slate-400 leading-relaxed">
        Warning: You are about to initiate a permanent deletion sequence. This record cannot be restored.
      </p>

      <!-- Record Data -->
      <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-4 mb-6 space-y-2.5 font-mono text-xs">
        <div class="flex justify-between border-b border-slate-900/60 pb-1.5">
          <span class="text-slate-500">RECORD_NAME</span>
          <span class="text-slate-100 font-bold uppercase">{{ contact.name }}</span>
        </div>
        <div class="flex justify-between border-b border-slate-900/60 pb-1.5">
          <span class="text-slate-500">EMAIL_NODE</span>
          <span class="text-slate-300">{{ contact.email || 'N/A' }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">PHONE_LINK</span>
          <span class="text-slate-300">{{ contact.phone || 'N/A' }}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-3 pt-4 border-t border-slate-900">
        <button 
          type="button" 
          @click="closeModal" 
          class="px-4 py-2 border border-slate-800 text-slate-400 font-mono text-xs uppercase rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200 cursor-pointer"
        >
          ABORT
        </button>
        
        <button 
          type="button" 
          @click="deleteContact" 
          class="relative group overflow-hidden bg-gradient-to-r from-red-600 to-red-950 text-white font-bold font-mono text-xs uppercase px-5 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
          :disabled="isDeletingContact"
        >
          <Icon v-if="isDeletingContact" icon="line-md:loading-twotone-loop" class="text-white text-xs" />
          <span>{{ isDeletingContact ? 'PURGING...' : 'EXECUTE_PURGE' }}</span>
        </button>
      </div>

      <!-- Error Message -->
      <div 
        v-if="deleteContactError" 
        class="mt-4 p-3 bg-red-950/30 border border-red-500/30 rounded-lg text-xs font-mono text-red-400 flex gap-2 items-start"
      >
        <Icon icon="lucide:alert-triangle" class="text-red-500 mt-0.5 shrink-0" />
        <div>
          <div class="font-bold uppercase">PURGE_FAILED</div>
          <div>{{ deleteContactError.message || deleteContactError }}</div>
        </div>
      </div>
    </div>
  </div>
</template>