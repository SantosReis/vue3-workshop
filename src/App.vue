<template>
  <main>
    <listItem
      v-for="(item, index) in database"
      :name="item.name"
      :department="item.department"
      :salary="item.salary"
      :position="index"
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
