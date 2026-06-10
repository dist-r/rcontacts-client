<script setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

// Props: show (untuk menampilkan/menyembunyikan), contact (data untuk diedit), isEdit (mode edit/tambah)
const props = defineProps({
    show: Boolean,
    contact: {
        type: Object,
        default: null
    },
    isEdit: Boolean,
    isSaving: Boolean
});

// Emits: event yang akan dikirim ke parent component
const emit = defineEmits(['close', 'save', 'delete']);

// State lokal untuk form data
const formData = ref({
    id: null,
    name: '',
    email: '',
    phone: ''
});

// Watcher untuk mengisi form data ketika modal ditampilkan
watch(() => props.show, (newShowState) => {
    if (newShowState) { // Jika modal baru saja dibuka
        if (props.isEdit && props.contact) {
            // Mode Edit: isi form dengan data kontak
            formData.value = { ...props.contact };
        } else {
            // Mode Add: reset form ke kondisi awal
            formData.value = { id: null, name: '', email: '', phone: '' };
        }
    }
}, { immediate: true });

// Fungsi untuk emit event 'save' dengan data dari form
const handleSave = () => {
    emit('save', formData.value);
};

// Fungsi untuk emit event 'delete'
const handleDelete = () => {
    if (props.contact) {
        emit('delete', props.contact.id);
    }
};

// Fungsi untuk emit event 'close'
const handleClose = () => {
    emit('close');
};
</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex justify-center items-center z-50 p-4" @click.self="handleClose">
        <div class="relative bg-slate-900/95 border border-slate-800 rounded-xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
            <!-- Top Tech Bar accent -->
            <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#42b883] to-transparent"></div>
            
            <!-- Tech Decors -->
            <div class="absolute top-2 right-4 font-mono text-[8px] text-slate-700 select-none">//GENERIC_NODE_PORT</div>

            <!-- Header -->
            <h2 class="text-xl font-bold font-mono tracking-wider text-white uppercase mb-6 flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#42b883] rounded-full shadow-[0_0_6px_#42b883]"></span>
                {{ isEdit ? "EDIT_RECORD" : "ADD_NEW_RECORD" }}
            </h2>

            <form @submit.prevent="handleSave" class="space-y-4">
                <!-- Name Input -->
                <div>
                    <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between" for="name">
                        <span>FULL_NAME</span>
                        <span class="text-slate-600">*REQUIRED</span>
                    </label>
                    <div class="relative group">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">ID</span>
                        <input
                            type="text"
                            v-model="formData.name"
                            required
                            class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                            placeholder="Enter record name"
                        />
                    </div>
                </div>

                <!-- Email Input -->
                <div>
                    <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between" for="email">
                        <span>EMAIL_ADDRESS</span>
                        <span class="text-slate-600">//OPTIONAL</span>
                    </label>
                    <div class="relative group">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">@</span>
                        <input
                            type="email"
                            v-model="formData.email"
                            id="email"
                            class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                            placeholder="identity@netspace.com"
                        />
                    </div>
                </div>

                <!-- Phone Input -->
                <div>
                    <label class="block text-xs font-bold font-mono uppercase text-slate-400 mb-1.5 tracking-wider flex justify-between" for="phone">
                        <span>PHONE_LINK</span>
                        <span class="text-slate-600">*REQUIRED</span>
                    </label>
                    <div class="relative group">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 group-focus-within:text-[#42b883] transition-colors">PH</span>
                        <input
                            type="text"
                            v-model="formData.phone"
                            id="phone"
                            required
                            class="w-full pl-9 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                            placeholder="Enter record phone"
                        />
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-between items-center pt-4 border-t border-slate-900 mt-6">
                    <div>
                        <button 
                            v-if="isEdit" 
                            @click.prevent="handleDelete" 
                            type="button" 
                            class="px-4 py-2 border border-red-500/30 text-red-400 font-mono text-xs uppercase rounded-lg hover:bg-red-500/10 hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)] transition-all duration-200 cursor-pointer"
                        >
                            PURGE
                        </button>
                    </div>
                    <div class="flex gap-3">
                        <button 
                            @click="handleClose" 
                            type="button" 
                            class="px-4 py-2 border border-slate-800 text-slate-400 font-mono text-xs uppercase rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200 cursor-pointer"
                        >
                            CANCEL
                        </button>
                        <button 
                            type="submit" 
                            class="relative group overflow-hidden bg-gradient-to-r from-[#42b883] to-[#35495e] text-slate-950 font-bold font-mono text-xs uppercase px-5 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(66,184,131,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer" 
                            :disabled="isSaving"
                        >
                            <span>{{ isEdit ? "COMMIT_EDIT" : "COMMIT_RECORD" }}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
