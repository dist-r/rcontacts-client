<script setup>
import { ref, watch } from 'vue';

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
    <div v-if="show" class="fixed inset-0 bg-transparent bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50" @click.self="handleClose">
        <div class="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-white">{{ isEdit ? "Edit Contact" : "Add New Contact" }}</h2>
            <form @submit.prevent="handleSave">
                <div class="mb-4">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name</label>
                    <input
                        type="text"
                        v-model="formData.name"
                        class="w-full p-2 border rounded-md bg-gray-700 text-white border-gray-600"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="email">Email</label>
                    <input
                        type="email"
                        v-model="formData.email"
                        id="email"
                        class="w-full p-2 border rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="phone">Phone</label>
                    <input
                        type="text"
                        v-model="formData.phone"
                        id="phone"
                        class="w-full p-2 border rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div class="flex justify-between items-center mt-6">
                    <div>
                        <button v-if="isEdit" @click.prevent="handleDelete" type="button" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                            Delete
                        </button>
                    </div>
                    <div class="flex gap-4">
                        <button @click="handleClose" type="button" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Cancel
                        </button>
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" :disabled="isSaving">
                            {{ isEdit ? "Update" : "Save" }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
