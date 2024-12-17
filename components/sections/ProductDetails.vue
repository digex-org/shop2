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

        <div class="flex items-center mt-1">
          <div class="flex relative">
            <span
                v-for="n in 5"
                :key="n"
                class="relative inline-block text-lg"
            >
              <font-awesome-icon
                  :icon="['fas', 'star']"
                  class="text-gray-400 text-sm"
              />
              <span
                  v-if="n <= Math.ceil(product.rating)"
                  class="absolute inset-0 overflow-hidden text-yellow-400"
                  :style="{ width: getStarFill(n) }"
              >
                <font-awesome-icon :icon="['fas', 'star']" class="text-sm"/>
              </span>
            </span>
          </div>
          <span class="ml-2 text-sm text-gray-500">
            ({{ product.rating.toFixed(2) }})
          </span>
        </div>
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
        <div class="relative">
          <button
              @click="toggleShareOptions"
              class="w-full border border-gray-400 rounded-md py-2 flex items-center justify-center text-sm font-semibold hover:bg-gray-100"
          >
            <font-awesome-icon :icon="['fas', 'share-alt']" class="mr-2" />
            Share
          </button>

          <!-- Share Options Dropdown -->
          <div
              v-if="showShareOptions"
              class="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10 mt-1"
          >
            <button
                @click="copyLink"
                class="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'link']" class="mr-2" />
              Copy Link
            </button>
            <a
                v-for="platform in socialPlatforms"
                :key="platform.name"
                :href="platform.url"
                target="_blank"
                class="w-full text-left px-4 py-2 text-sm text-gray-600 flex items-center hover:bg-gray-100"
            >
              <font-awesome-icon :icon="platform.icon" class="mr-2" />
              {{ platform.name }}
            </a>
          </div>
        </div>
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
      <div>
        <p><span class="font-bold">Status: </span> {{ upperFirst(product.status) }}</p>
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
import {upperFirst} from "scule";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const showShareOptions = ref(false);

// Social platforms and links
// const socialPlatforms = [
//   {
//     name: "Facebook",
//     url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
//     icon: ["fab", "facebook"]
//   },
//   {
//     name: "Twitter",
//     url: `https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(props.product.title)}`,
//     icon: ["fab", "twitter"]
//   },
//   {
//     name: "WhatsApp",
//     url: `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`,
//     icon: ["fab", "whatsapp"]
//   }
// ];

// Toggle the share options dropdown
const toggleShareOptions = () => {
  showShareOptions.value = !showShareOptions.value;
};

// Copy product link
const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copied to clipboard!");
  });
};
const getStarFill = (starIndex) => {
  if (props.product.rating >= starIndex) {
    return "100%"; // Full star
  }
  if (props.product.rating < starIndex - 1) {
    return "0%"; // Empty star
  }
  // Partially filled star
  return `${(props.product.rating - (starIndex - 1)) * 100}%`;
};
</script>
