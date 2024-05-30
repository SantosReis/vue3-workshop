<script setup>
import BaseBtn from "../components/BaseBtnAsProps.vue";
import BaseBtnSlot from "../components/BaseBtnAsSlot.vue";
</script>
<template>
  <div class="container mt-10 flex">
    <BaseBtn
      labelValue="Click here as Props"
      iconValue="material-symbols:arrow-circle-right"
    />
  </div>
  <div class="container mt-10 flex">
    <BaseBtnSlot>
      <template #default>
        <span>Click Here as Slot</span>
        <Icon name="material-symbol:arrow-circle-right" />
      </template>
    </BaseBtnSlot>
  </div>
</template>
