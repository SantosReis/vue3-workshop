<template>
  <div class="teleport">
    <h1 class="text-4xl mb-5">Teleport</h1>
    <button @click="showModal = true" class="bg-green-700 text-white p-2 my-2">
      Show modal
    </button>
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is a modal</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          necessitatibus ipsum, libero voluptate ex voluptatem porro! Quis
          molestiae aperiam, repellendus quod iusto dolores veniam ullam
          perferendis, iure vel quibusdam officiis!
        </p>
        <button
          @click="showModal = false"
          class="bg-green-700 text-white p-2 mt-2"
        >
          Hide modal
        </button>
      </div>
    </teleport>
  </div>
</template>
<script setup>
import { ref } from "vue";
//modals
const showModal = ref(false);
</script>
<style scoped>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
