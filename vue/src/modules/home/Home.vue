<script setup>
import { ref, watch, onMounted } from 'vue';
import { useContact } from '../../hooks/useContact';
import ContactCard from '../../components/ContactCard.vue';
import ContactModal from '../../components/ContactModal.vue';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'vue-router';
import VueLogo from '../../assets/vue.svg';


// Menggunakan hook useContact untuk berinteraksi dengan data
const { 
    contacts, 
    isFetchingContacts, 
    createContactMutate, 
    updateContactMutate, 
    deleteContactMutate,
    error: contactError // Alias error to avoid conflict with authError
} = useContact();

const { logout, error: authError } = useAuth();
const router = useRouter();

const isModalOpen = ref(false);
const isEditMode = ref(false);
const selectedContact = ref(null);
const searchTerm = ref('');

const filteredContacts = ref([]);

watch([contacts, searchTerm], () => {
  if (contacts.value) {
    filteredContacts.value = contacts.value.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }
}, { immediate: true });

const openAddModal = () => {
    isEditMode.value = false;
    selectedContact.value = null;
    isModalOpen.value = true;
};

const openEditModal = (contact) => {
    isEditMode.value = true;
    selectedContact.value = { ...contact };
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedContact.value = null;
};

const handleSaveContact = (contactData) => {
    if (isEditMode.value) {
        updateContactMutate({ contactId: contactData.id, ...contactData });
    } else {
        createContactMutate(contactData);
    }
    closeModal();
};

const handleDeleteContact = (contactId) => {
    if (confirm('Are you sure you want to delete this contact?')) {
        // Panggil mutasi delete
        deleteContactMutate(contactId);
        closeModal();
    }
};

watch(authError, (newError) => {
  if (newError) {
    localStorage.removeItem('token');
    router.push('/signin');
  }
});


watch(contactError, (newError) => {
  if (newError) {
    console.error("Contact service error:", newError);
  }
});

</script>

<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <nav class="bg-gray-800 shadow-md">
            <div class="container mx-auto px-6 py-3 flex justify-between items-center">
                <div class="flex items-center">
                    <img :src="VueLogo" alt="Vue Logo" class="w-8 h-8 mr-2" />
                    <h1 class="text-2xl font-bold">R-Contacts</h1>
                </div>
                <button
                    @click="logout"
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                    Logout
                </button>
            </div>
        </nav>

        <div class="bg-gray-800">
            <div class="container mx-auto p-6 text-center">
                <img
                    :src="VueLogo"
                    alt="Vue Logo"
                    class="w-24 h-24 mx-auto mb-4 animate-spin"
                    style="animation-duration: 10s;"
                />
                <h2 class="text-4xl font-bold mb-2">Welcome to R-Contacts</h2>
                <p class="text-lg">
                    A contact management app built with Vue.
                </p>
            </div>
        </div>

        <div class="container mx-auto p-6">
            <div class="flex justify-between items-center mb-6">
                <div class="w-1/2">
                    <input
                        type="text"
                        placeholder="Search contacts..."
                        class="w-full p-2 border rounded-md bg-gray-700 text-white"
                        v-model="searchTerm"
                    />
                </div>
                <button
                    @click="openAddModal"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    Add Contact
                </button>
            </div>

            <div v-if="isFetchingContacts" class="text-center">
                <p>Loading contacts...</p>
            </div>

            <div v-else-if="filteredContacts && filteredContacts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ContactCard 
                    v-for="contact in filteredContacts" 
                    :key="contact.id" 
                    :contact="contact"
                    @edit="openEditModal(contact)"
                    @delete="handleDeleteContact(contact.id)"
                />
            </div>

            <div v-else class="text-center text-gray-500">
                <p>No contacts found.</p>
            </div>

            <!-- Modal untuk Add/Edit Kontak -->
            <ContactModal 
                :show="isModalOpen"
                :is-edit="isEditMode"
                :contact="selectedContact"
                @close="closeModal"
                @save="handleSaveContact"
                @delete="handleDeleteContact"
                :is-saving="isCreatingContact || isUpdatingContact"
            />
        </div>
    </div>
</template>