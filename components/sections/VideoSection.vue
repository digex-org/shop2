<template>
  <video
      :src="video"
      autoplay
      muted
      loop
      class="w-full h-auto"
  ></video>
</template>

<script setup>
 defineProps({
   video: {
     type: String,
     required: true
   }
 })
</script>

<style scoped>

</style>