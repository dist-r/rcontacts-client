<script setup>
</script>

<template>
  <section class="h-screen flex justify-center items-center">
    <form class="w-96 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">SignUp</h1>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label for="Name">Name:</label>
        <input type="text" id="Name" name="Name" required /></div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </section>
</template>