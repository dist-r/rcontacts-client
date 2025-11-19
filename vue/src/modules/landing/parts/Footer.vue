<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="bg-[#35495e] text-white py-12">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 class="text-lg font-bold mb-4">RContacts</h3>
          <p class="text-gray-400">Your digital rolodex, reimagined.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Navigate</h3>
          <ul>
            <li><router-link to="/home" class="text-gray-400 hover:text-[#42b883]">Home</router-link></li>
            <li><router-link to="/signup" class="text-gray-400 hover:text-[#42b883]">Sign Up</router-link></li>
            <li><router-link to="/signin" class="text-gray-400 hover:text-[#42b883]">Sign In</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Legal</h3>
          <ul>
            <li><a href="#" class="text-gray-400 hover:text-[#42b883]">Terms of Service</a></li>
            <li><a href="#" class="text-gray-400 hover:text-[#42b883]">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Connect</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="text-gray-400 hover:text-[#42b883]"><Icon icon="fa-brands:github" :style="{ fontSize: '24px' }" /></a>
            <a href="#" class="text-gray-400 hover:text-[#42b883]"><Icon icon="fa-brands:twitter" :style="{ fontSize: '24px' }" /></a>
            <a href="#" class="text-gray-400 hover:text-[#42b883]"><Icon icon="fa-brands:linkedin" :style="{ fontSize: '24px' }" /></a>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>&copy; 2025 RContacts. All rights reserved.</p>
      </div>
    </footer>
</template>