// ...existing code...
<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    contact: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['edit', 'delete']);

const onEdit = () => {
    emit('edit');
};

const onDelete = () => {
    emit('delete');
};

const initials = computed(() => {
    const name = props.contact?.name || '';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return '';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});
</script>

<template>
    <div class="bg-gray-800 text-white rounded-lg shadow-md p-6 flex items-center justify-between border-l-4 border-green-500">
        <!-- Left: avatar + info -->
        <div class="flex items-center">
            <div class="w-10 h-10 mr-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ initials }}
            </div>
            <div>
                <p class="text-lg font-semibold">{{ contact.name }}</p>
                <p class="text-gray-300 text-sm mt-0.5">{{ contact.email }}</p>
                <p class="text-gray-300 text-sm mt-0.5">{{ contact.phone }}</p>
            </div>
        </div>

        <!-- Right: action icons (emit tetap sama, tanpa payload) -->
        <div class="flex gap-4">
            <button @click="onEdit" class="text-blue-400 hover:text-blue-200 focus:outline-none" aria-label="Edit">
                <!-- edit icon -->
                <Icon icon="mdi:pencil-outline" class="h-5 w-5" />
            </button>

            <button @click="onDelete" class="text-red-400 hover:text-red-200 focus:outline-none" aria-label="Delete">
               <Icon icon="mdi:trash-can-outline" class="h-5 w-5" />
            </button>
        </div>
    </div>
</template>
// ...existing code...