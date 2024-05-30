<script setup>
defineProps({
  labelValue: {
    type: String,
  },
  iconValue: {
    type: String,
  },
});
</script>
<template>
  <div
    class="flex items-center gap-1.5 rounded-md bg-primary-blue px-3 py1.5 text-white"
  >
    <span>
      {{ labelValue }}
    </span>
    <Icon :name="iconValue" />
  </div>
</template>
