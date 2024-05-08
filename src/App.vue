<template>
  <main>
    <listItem
      :name="database[0].name"
      :department="database[0].department"
      :salary="database[0].salary"
      :position="1"
    />
  </main>
</template>

<script setup>
import listItem from "./components/listItem.vue";
import { ref } from "vue";

let database = ref([
  {
    name: "Johnny",
    department: "Marketing",
    salary: 30000,
  },
  {
    name: "Sarah",
    department: "Engineering",
    salary: 72000,
  },
  {
    name: "Terrance",
    department: "Executive",
    salary: 125000,
  },
]);
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
