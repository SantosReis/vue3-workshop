<template>
  <main>
    <Nav />
    <section class="w-fit mx-auto mt-10 mb-5">
      <RouterView />
    </section>
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>

<style scoped></style>
