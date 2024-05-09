<script setup>
import { watchEffect, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const welcome = ref("Hello!");
const count = ref(0);
const count2 = ref(0);
// Writes to a pre tag (Like console.log)
const write = ref("");
//#1 Side Effects Router Example: watchEffct start before load
watchEffect(() => {
  welcome.value = `Hello ${route.name}`;
});

// watch(
//   () => route.name,
//   (values) => {
//     welcome.value = `Hello ${route.name}`;
//   }
// );

// #2 Watch runs lazily while watchEffect runs on init
// watch(
//   () => count.value,
//   (curr, prev) => {
//     write.value = `Watch ran! ${count.value}`;
//   }
// );
// watchEffect(() => (write.value = `Watch Effect ran! ${count.value}`));

//#3  Be more specific on what should trigger to re-run
// watch([count, count2], (val) => {
//   write.value = `Watch Values Updated! ${count.value} ${count2.value}`;
// });

// watch([count, count2], ([curCount, curCount2], [prevCount, prevCount2]) => {
//   write.value = `Count Values:  ${curCount}, ${prevCount}
//                  Count2 Values:  ${curCount2}, ${prevCount2}`;
// });
</script>

<template>
  <div>
    <h1>{{ welcome }}</h1>
    <br />
    <router-link to="/">Go to Home</router-link>
    <br />
    <router-link to="/watchers">Go to watchers</router-link>
    <br /><br />
    <button @click="count++">count++</button>
    <br />
    <button @click="count2++">count2++</button>
  </div>
  <div class="counts">
    <h3>Count : {{ count }}</h3>
    <h3>Count 2: {{ count2 }}</h3>
  </div>
  <h3>Console Log:</h3>
  <pre>
  {{ write }}

  </pre>
  <router-view></router-view>
</template>

<style>
.counts {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
