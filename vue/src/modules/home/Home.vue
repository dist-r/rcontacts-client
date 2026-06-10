<script setup>
import { ref, watch } from 'vue';
import { useContact } from '../../hooks/useContact';
import ContactCard from '../../components/ContactCard.vue';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'vue-router';
import ModalDeleteContact from './parts/ModalDeleteContact.vue';
import ModalEditContact from './parts/ModalEditContact.vue';
import ModalAddContact from './parts/ModalAddContact.vue';
import VueLogo from '../../assets/vue.svg';
import { Icon } from '@iconify/vue';

// Menggunakan hook useContact untuk berinteraksi dengan data
const { 
    contacts, 
    isFetchingContacts, 
    fetchContactsError
} = useContact();

const { logout, error: authError } = useAuth();

const router = useRouter();

const searchTerm = ref('');
const filteredContacts = ref([]);

const modalAddOpen = ref(false);
const modalEditOpen = ref(false);
const modalDeleteOpen = ref(false);

const selectedContact = ref(null);

const closeModal = () => {
    modalAddOpen.value = false;
    modalEditOpen.value = false;
    modalDeleteOpen.value = false;
    selectedContact.value = null;
};

const handleAdd = () => {
    modalAddOpen.value = true;
}

const handleEdit = (contact) => {
    modalEditOpen.value = true;
    selectedContact.value = contact;
}

const handleDelete = (contact) => {
    modalDeleteOpen.value = true;
    selectedContact.value = contact
}

watch([contacts, searchTerm], () => {
  if (contacts.value) {
    filteredContacts.value = contacts.value.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }
}, { immediate: true });


watch(authError, (newError) => {
  if (newError) {
    localStorage.removeItem('token');
    router.push('/signin');
  }
});

watch(fetchContactsError, (newError) => {
  if (newError) {
    console.error("Contact service error:", newError);
  }
});

</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden pb-16">
        <!-- Cyber Background Grid -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#42b883]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <!-- Navigation Bar -->
        <nav class="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="relative group">
                        <div class="absolute inset-0 bg-[#42b883]/30 blur-md rounded-full group-hover:bg-[#42b883]/50 transition-colors"></div>
                        <img :src="VueLogo" alt="Vue Logo" class="w-8 h-8 relative z-10 filter drop-shadow-[0_0_4px_rgba(66,184,131,0.3)]" />
                    </div>
                    <div>
                        <h1 class="text-lg font-bold font-mono tracking-widest text-white flex items-center gap-1.5">
                            RCONTACTS
                        </h1>
                        <span class="block text-[8px] font-mono text-slate-500 uppercase tracking-wider -mt-1">// USER_WORKSPACE</span>
                    </div>
                </div>
                <button
                    @click="logout"
                    class="relative px-4 py-2 border border-red-500/30 text-red-400 font-mono text-xs uppercase rounded-lg hover:bg-red-500/10 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                >
                    <Icon icon="lucide:log-out" class="text-sm group-hover:translate-x-0.5 transition-transform" />
                    <span>TERMINATE_SESSION</span>
                </button>
            </div>
        </nav>

        <!-- Welcome Banner -->
        <div class="relative bg-slate-900/40 border-b border-slate-900/60 py-10 overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(66,184,131,0.03),transparent_70%)] pointer-events-none"></div>
            <div class="container mx-auto px-6 text-center relative z-10">
                <div class="relative inline-block mb-4">
                    <div class="absolute inset-0 bg-[#42b883]/10 blur-xl rounded-full"></div>
                    <img
                        :src="VueLogo"
                        alt="Vue Logo"
                        class="w-20 h-20 mx-auto filter drop-shadow-[0_0_15px_rgba(66,184,131,0.25)] animate-[spin_20s_linear_infinite]"
                    />
                </div>
                <h2 class="text-3xl font-extrabold font-mono text-white tracking-wider uppercase mb-1">
                    WELCOME_TO_RCONTACTS
                </h2>
                <p class="text-slate-400 text-sm max-w-md mx-auto font-mono text-xs uppercase tracking-wider text-slate-500">
                    // CENTRALIZED_DIRECTORY_DECRYPTED
                </p>
            </div>
        </div>

        <!-- Dashboard Content -->
        <div class="container mx-auto px-6 mt-8 relative z-10">
            <!-- Search & Actions -->
            <div class="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
                <!-- Search Bar -->
                <div class="relative flex-1 max-w-md group">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#42b883] transition-colors">
                        <Icon icon="lucide:search" class="text-lg" />
                    </span>
                    <input
                        type="text"
                        placeholder="SEARCH_DIRECTORY..."
                        class="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm placeholder-slate-700 focus:outline-none focus:border-[#42b883] focus:shadow-[0_0_15px_rgba(66,184,131,0.15)] transition-all duration-300"
                        v-model="searchTerm"
                    />
                </div>

                <!-- Add Button -->
                <button
                    @click="handleAdd"
                    class="relative group overflow-hidden bg-gradient-to-r from-[#42b883] to-[#35495e] text-slate-950 font-bold font-mono text-xs uppercase px-5 py-2.5 rounded-lg hover:shadow-[0_0_20px_rgba(66,184,131,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                    <span class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                    <Icon icon="lucide:user-plus" class="text-sm" />
                    <span>ADD_NEW_RECORD</span>
                </button>
            </div>

            <!-- Loader / Errors -->
            <div v-if="isFetchingContacts" class="py-20 text-center flex flex-col items-center justify-center gap-3">
                <Icon icon="line-md:loading-twotone-loop" class="text-[#42b883] text-4xl" />
                <p class="font-mono text-xs uppercase text-slate-500 tracking-widest animate-pulse">
                    fetching_directory_records...
                </p>
            </div>

            <div 
                v-else-if="fetchContactsError" 
                class="max-w-md mx-auto p-4 bg-red-950/30 border border-red-500/30 rounded-lg text-center"
            >
                <Icon icon="lucide:alert-triangle" class="text-red-500 text-3xl mx-auto mb-2" />
                <h3 class="font-mono font-bold text-sm uppercase text-red-400 mb-1">DATA_STREAM_ERROR</h3>
                <p class="font-mono text-xs text-red-500">{{ fetchContactsError.message || fetchContactsError }}</p>
            </div>

            <!-- Contacts Cards Grid -->
            <div v-else-if="filteredContacts && filteredContacts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ContactCard 
                    v-for="contact in filteredContacts" 
                    :key="contact.id" 
                    :contact="contact"
                    @edit="() => handleEdit(contact)"
                    @delete="() => handleDelete(contact)"
                />
            </div>

            <!-- Empty State -->
            <div 
                v-else 
                class="py-20 border border-dashed border-slate-900 rounded-xl bg-slate-900/10 text-center max-w-lg mx-auto"
            >
                <Icon icon="lucide:folder-open" class="text-slate-700 text-4xl mx-auto mb-3" />
                <h3 class="font-mono font-bold text-sm text-slate-400 uppercase mb-1">NO_RECORDS_FOUND</h3>
                <p class="font-mono text-xs text-slate-600">The requested query does not exist in local directory nodes.</p>
            </div>

            <!-- Modals Edit -->
             <ModalEditContact 
                v-if="modalEditOpen"
                :contact="selectedContact"
                @close="closeModal"
             />

            <!-- Modals Delete -->
             <ModalDeleteContact 
                v-if="modalDeleteOpen"
                :contact="selectedContact"
                @close="closeModal"
             />

            <!-- Modal Add -->
            <ModalAddContact
                v-if="modalAddOpen"
                @close="closeModal"
            />
        </div>
    </div>
</template>
