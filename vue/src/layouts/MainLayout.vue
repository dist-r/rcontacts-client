<script setup>
import { ref, watch, watchEffect } from 'vue';
import ModalSignIn from '../shared/ModalSignIn.vue';
import { useUser} from '../hooks/useUser';

const showModal = ref(false);
const message = ref('');
const {error} = useUser();

watchEffect(()=> {
  const token = localStorage.getItem('token');
  if (!token) {
    showModal.value = true;
    message.value = 'Signin required to access this feature.';
    return;
  }
})
 
watch(error, (newError) => {
  if (newError) {
    message.value = newError.message || 'An error occurred. Please sign in.';
    showModal.value = true;
  } else {
    showModal.value = false;
    message.value = '';
  }
});
</script>

<template>
  <router-view/>
  <ModalSignIn :errorMessage="message" :showModal="showModal"/>
</template>
