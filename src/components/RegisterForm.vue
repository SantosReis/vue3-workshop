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
    <div class="mb-4">
      <label>Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="password"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-green-500 rounded"
    >
      Register
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function submit() {
  // Handle registration
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  alert(`Registering ${email.value}`);
}
</script>
