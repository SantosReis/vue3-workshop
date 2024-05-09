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
</template>
<script setup></script>
