<template>
  <div class="container mx-auto py-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" :class="limit >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'">
      <div v-for="item in limitedProducts" :key="item.id" class="text-center">
        <ProductCard :item="item"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useProduct } from "~/composables/useProduct";
import { useCart } from "~/composables/useCart";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  limit: {
    type: Number,
    required: false
  }
});
const { products } = useProduct();

const limitedProducts = computed(() => products.slice(0, props.limit));

</script>

<style scoped>

</style>
