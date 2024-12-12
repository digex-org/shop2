<template>
  <img :src="bannerImage" alt="banner">
</template>

<script setup lang="ts">
  defineProps({
    bannerImage: {
      type: String,
      required: true
    }
  });
</script>

<style scoped>

</style>