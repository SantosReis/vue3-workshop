<template>
  <h1>Lifecycle Hooks</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
} from "vue";

// Updating Vue 2 Code to Vue 3 Lifecycle Hooks
// beforeCreate -> use setup()
// created -> use setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed -> onUnmounted
// errorCaptured -> onErrorCaptured

// Vue 3 Composition API
// onBeforeMount – called before mounting begins
// onMounted – called when component is mounted
// onBeforeUpdate – called when reactive data changes and before re-render
// onUpdated – called after re-render
// onBeforeUnmount – called before the Vue instance is destroyed
// onUnmounted – called after the instance is destroyed
// onActivated – called when a kept-alive component is activated
// onDeactivated – called when a kept-alive component is deactivated
// onErrorCaptured – called when an error is captured from a child component

// What do you use in real-life
// construct: `onMounted`
// update: `watch` and `computed`. Also `emit`
// destruct: `unMounted`

//Mounted Hooks
// (i.e. loading a page)
onBeforeMount(() => {
  console.log(`onBeforeMount`);
});
onMounted(() => {
  console.log(`onMounted`);
});
// (i.e. leaving a page)
onBeforeUnmount(() => {
  console.log(`onBeforeUnmount`);
});
onUnmounted(() => {
  console.log(`onUnmounted`);
});

//Activated Hooks (i.e. KeepAlive)
onActivated(() => {
  console.log(`onActivated`);
});
onDeactivated(() => {
  console.log(`onDeactivated`);
});

//Updated Hooks (i.e. updating counter)
onBeforeUpdate(() => {
  console.log(`onBeforeUpdate`);
});
onUpdated(() => {
  console.log(`onUpdated`);
});

//counter example
const count = ref(0);
const handlePlus = () => {
  this.count++;
};
const handleMinus = () => {
  this.count--;
};
</script>
