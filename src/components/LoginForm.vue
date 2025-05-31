<template>
  <form @submit.prevent="submit">
    <div class="mb-4">
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    <div class="mb-4">
      <label>Password</label>
      <input
        v-model="password"
        type="password"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-blue-500 rounded"
    >
      Login
    </button>
    <p
      class="mt-4 text-sm text-blue-600 cursor-pointer"
      @click="$emit('switch-tab', 'Forgot Password')"
    >
      Forgot Password?
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");

function submit() {
  // Handle login
  alert(`Logging in with ${email.value}`);
}
</script>
