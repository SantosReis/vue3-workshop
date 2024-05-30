<script setup>
import { ref, computed, watch } from "vue";
const msg = ref("Hello World!");

const a = ref(0);
const b = ref(0);

const comMsg = computed(() => {
  console.log("computed");
  // return a.value + b.value;
  return Number(a.value) + Number(b.value);
});

watch(a, (newValue, oldValue) => {
  console.log("watch");
  msg.value = Number(a.value) + Number(b.value);
});
</script>
<template>
  <h1>Watch: {{ msg }}</h1>
  <input v-model="a" />
  <input v-model="b" />
  <h1>Computed: {{ comMsg }}</h1>
</template>
