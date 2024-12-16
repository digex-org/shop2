<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
    <ProductImageCarouselSection :images="product.images" class="w-full" />

    <div class="p-4 space-y-6">
      <!-- Product Title and Price -->
      <div>
        <p class="text-sm text-gray-400 font-semibold">Sustainable materials</p>
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <p class="text-base text-gray-600">{{ product.subtitle }}</p>
        <p class="text-xl font-semibold mt-2">€{{ product.price }}</p>
      </div>

      <!-- Favorite and Add to Bag Buttons -->
      <div class="space-y-2 w-3/6">
        <button
            class="w-full border border-gray-400 rounded-md py-2 flex items-center justify-center text-sm font-semibold hover:bg-gray-100"
        >
          <font-awesome-icon :icon="['fas', 'heart']" class="mr-2" />
          Favorite
        </button>

        <AddToCartButton :product="product" class="w-full bg-black text-white rounded-md py-2 text-sm font-semibold hover:bg-gray-800" />
      </div>

      <!-- Shipping Information -->
      <div class="flex items-center gap-2 text-gray-600 text-sm">
        <font-awesome-icon :icon="['fas', 'truck']" />
        <span>Free Shipping for Vans Family or spend $80</span>
      </div>

      <!-- Product Description -->
      <div>
        <h2 class="text-lg font-bold mb-2">Description</h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          {{ product.description }}
        </p>
        <ul class="list-disc pl-5 text-sm text-gray-700 mt-2">
          <li>100% Cotton fabric</li>
          <li>Short sleeve crew neck T-shirt</li>
          <li>Screenprinted graphic on the front and back</li>
        </ul>
      </div>

      <!-- Size Options -->
      <div  v-if="product.sizes">
        <h3 class="text-sm font-semibold mb-2">The Little Kids Tagged.</h3>
        <div class="flex gap-2">
          <button
              v-for="(size, index) in product.sizes"
              :key="index"
              class="border border-gray-400 py-2 px-4 rounded-md text-sm font-bold hover:bg-gray-200"
          >
            {{ size }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
