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
    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-yellow-500 rounded"
    >
      Reset Password
    </button>
    <p
      class="mt-4 text-sm text-blue-600 cursor-pointer"
      @click="$emit('switch-tab', 'Login')"
    >
      Back to Login
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");

function submit() {
  // Handle password reset
  alert(`Password reset link sent to ${email.value}`);
}
</script>
