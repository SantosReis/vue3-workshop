<template>
  <main>
    <ChildComponent @add="(i) => (count += i)" />
    <p>Count: {{ count }}</p>

    <listItem
      v-for="(item, index) in database"
      :name="item.name"
      :department="item.department"
      :salary="item.salary"
      :position="index"
      v-on:deleteItem="deleteItem"
    />
  </main>
</template>

<script setup>
import listItem from "./components/listItem.vue";
import ChildComponent from "./components/Child.vue";
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

const count = ref(0);

function deleteItem(position) {
  database.value.splice(position, 1);
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
