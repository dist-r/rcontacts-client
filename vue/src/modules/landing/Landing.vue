<script setup>
import { Icon } from '@iconify/vue';
import Header from './parts/Header.vue';
import Main from './parts/Main.vue';
import Footer from './parts/Footer.vue';
</script>

<template>
  <div class="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-hidden">
    <Header />
    <Main />
    <Footer />
  </div>
</template>
