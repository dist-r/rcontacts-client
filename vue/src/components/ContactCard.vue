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
    <div class="relative bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 flex items-center justify-between transition-all duration-300 hover:border-[#42b883]/30 hover:shadow-[0_0_20px_rgba(66,184,131,0.08)] group overflow-hidden">
        <!-- Tech detail lines -->
        <div class="absolute top-0 left-0 w-2 h-full bg-[#42b883]/40 group-hover:bg-[#42b883] transition-colors duration-300"></div>
        <div class="absolute top-0 right-0 w-8 h-[1px] bg-slate-800 group-hover:bg-[#42b883]/40 transition-colors duration-300"></div>

        <!-- Left: avatar + info -->
        <div class="flex items-center pl-3">
            <div class="w-12 h-12 mr-4 bg-gradient-to-br from-[#42b883] to-[#35495e] rounded-lg border border-[#42b883]/30 flex items-center justify-center text-slate-950 font-bold font-mono text-lg filter drop-shadow-[0_0_4px_rgba(66,184,131,0.2)]">
                {{ initials }}
            </div>
            <div>
                <p class="text-base font-bold text-white group-hover:text-[#42b883] transition-colors duration-200 tracking-wide font-mono flex items-center gap-1.5">
                    {{ contact.name }}
                </p>
                <div class="mt-1 space-y-0.5">
                    <p class="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                        <Icon icon="lucide:mail" class="text-[#42b883]/70 text-xs shrink-0" />
                        <span class="truncate max-w-[150px] sm:max-w-[180px]">{{ contact.email }}</span>
                    </p>
                    <p class="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                        <Icon icon="lucide:phone" class="text-[#42b883]/70 text-xs shrink-0" />
                        <span>{{ contact.phone || 'NO_CONTACT_NUM' }}</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- Right: action buttons -->
        <div class="flex items-center gap-2">
            <!-- Edit Button -->
            <button 
                @click="onEdit" 
                class="w-9 h-9 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#42b883] hover:border-[#42b883]/30 hover:shadow-[0_0_10px_rgba(66,184,131,0.15)] transition-all duration-200 cursor-pointer" 
                aria-label="Edit"
            >
                <Icon icon="lucide:edit-3" class="h-4 w-4" />
            </button>

            <!-- Delete Button -->
            <button 
                @click="onDelete" 
                class="w-9 h-9 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/30 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)] transition-all duration-200 cursor-pointer" 
                aria-label="Delete"
            >
                <Icon icon="lucide:trash-2" class="h-4 w-4" />
            </button>
        </div>
    </div>
</template>