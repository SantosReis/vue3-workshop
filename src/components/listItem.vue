<template>
  <div class="container">
    <h2>Name: {{ name }}</h2>
    <p>Department: {{ department }}</p>
    <p>Salary: {{ salary }}</p>
    <p>Position: {{ position }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  department: String,
  salary: Number,
  position: Number,
});
</script>

<style scoped>
h2 {
  padding: 0;
  margin: 0;
}
.container {
  border: 1px solid rgb(124, 191, 202);
  width: 300px;
  margin: 1em auto 1em auto;
  padding: 1em;
  border-radius: 5px;
  font-size: 1.3em;
}
</style>
