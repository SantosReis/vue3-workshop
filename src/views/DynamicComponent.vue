<template>
  <h1>Dynamic Component</h1>
  <div class="about">
    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
    <button @click="changeContact()">Contact</button>
    <button @click="changeAbout()">About</button>
  </div>
</template>
<script setup>
import { shallowRef } from "vue";
import About from "../components/DynamicAbout.vue";
import Contact from "../components/DynamicContact.vue";

const activeComponent = shallowRef(Contact);

function changeContact() {
  this.activeComponent = Contact;
}

function changeAbout() {
  this.activeComponent = About;
}
</script>
