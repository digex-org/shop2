<template>
<!--  <NuxtLink :to="{ name: 'category-category', params: { category: encodeURIComponent(category.name) } }">-->
    <div class="category-card relative text-center p-1.5">
      <div>
        <img :src="category.image" :alt="category.name" class="category-image w-full h-auto max-h-64 object-cover mb-5" loading="lazy" />
        <h3 class="absolute bottom-8 left-3.5 font-bold text-white text-2xl">{{ category.name }}</h3>
      </div>
    </div>
<!--  </NuxtLink>-->
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
});

</script>
<style scoped>
.category-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent; /* No border initially */
  pointer-events: none;
  transition: border-color 0.3s ease;
}
.category-card:hover::after {
  border-color: #363438;
}
</style>
