<template>
  <h1>
    Post Detail | $route.name: {{ $route.name }} or {{ this.$route.name }}
  </h1>
  <h1>
    Post Detail | $route.params.id:
    {{ $route.params.id }} or
    {{ this.$route.params.id }}
  </h1>
  <p><router-link to="/posts">Back</router-link></p>
  <button @click="showPostID">Show Post ID</button>
  <br />
  <button @click="goHomeIn3Secs(3000)">Go Home in 3 secs</button>
  <br />
  <button @click="goToPost('id1')">Go to post ID</button>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const showPostID = () => {
  console.log(`The ID of this post is: ${route.params.id}`);
};

const goHomeIn3Secs = (seconds) => {
  setTimeout(() => {
    router.push("/");
    // router.push({ name: "Emitters" });
  }, seconds);
};
const goToPost = (id) => {
  router.push({
    name: "PostsDetail",
    params: {
      id: "id1",
    },
  });
};
</script>
