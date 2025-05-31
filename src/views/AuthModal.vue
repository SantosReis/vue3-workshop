<template>
  <div>
    <!-- Open Modal Button -->
    <button
      @click="isOpen = true"
      class="px-4 py-2 text-white bg-blue-600 rounded shadow"
    >
      Open Auth Modal
    </button>

    <!-- Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <!-- Tabs -->
        <div class="flex justify-between mb-4 border-b">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-4 py-2"
            :class="{
              'border-b-2 border-blue-500 font-bold': activeTab === tab,
              'text-gray-500': activeTab !== tab,
            }"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Tab Contents -->
        <div>
          <LoginForm v-if="activeTab === 'Login'" @switch-tab="switchTab" />
          <RegisterForm v-if="activeTab === 'Register'" />
          <ForgotPasswordForm
            v-if="activeTab === 'Forgot Password'"
            @switch-tab="switchTab"
          />
        </div>

        <!-- Close Button -->
        <button
          class="absolute text-gray-500 top-4 right-4 hover:text-red-500"
          @click="closeModal"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import ForgotPasswordForm from "../components/ForgotPasswordForm.vue";

const isOpen = ref(false);
const activeTab = ref("Login");
const tabs = ["Login", "Register", "Forgot Password"];

function closeModal() {
  isOpen.value = false;
}

function switchTab(tab) {
  activeTab.value = tab;
}
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
</style>
