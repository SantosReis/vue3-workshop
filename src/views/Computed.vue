<script setup>
import { ref, computed } from "vue";

//ex 1: method
// function add() {
//   return 10 + 20;
// }

//ex 2: method
// let a = ref(10);
// let b = ref(20);
// function add() {
//   console.log("addition is run", a.value + b.value);
//   return a.value + b.value;
// }
// setTimeout(() => {
//   a.value = 50;
//   b.value = 30;
// }, 2000);

//ex 3: method
// let a = ref(10);
// let b = ref(20);
// function add(xa, xb) {
//   console.log("addition is run", xa + xb);
//   a.value = xa;
//   b.value = xb;
//   return a.value + b.value;
// }

//ex 1: computed
// let a = ref(10);
// let b = ref(20);
// const add = computed(() => {
//   console.log("run time is");
//   return a.value + b.value;
// });
// setTimeout(() => {
//   a.value = 50;
//   b.value = 30;
// }, 2000);

let a = ref(10);
let b = ref(20);
const add = computed({
  get() {
    console.log("run time is", a.value + b.value);
    return a.value + b.value;
  },
  set(xb) {
    b.value = xb;
  },
});
setTimeout(() => {
  add.value = 50;
}, 2000);
</script>
<template>
  <h1>Method</h1>
  <!-- <p>
    {{ add() }}
  </p> -->

  <!-- <p>
    {{ add(20, 40) }}
  </p>
  <p>
    {{ add(30, 50) }}
  </p>
  <p>
    {{ add(30, 20) }}
  </p>
  <p>
    {{ add(30, 10) }}
  </p> -->
  <h1>Computed</h1>
  <p>{{ add }}</p>
  <p>{{ add }}</p>
  <p>{{ add }}</p>
  <p>{{ add }}</p>
</template>
