<template>
  <div class="group relative">
    <div>
      <img :src="item.image" alt="Product Image" class="w-full h-64 object-cover mb-4 rounded-lg shadow-md" loading="lazy"/>
      <h3 class="mt-4 text-sm font-bold uppercase">{{ item.title }}</h3>
      <p class="text-sm font-bold">FROM
        <span
            v-if="item.originalPrice"
            class="text-gray-400 ml-2 line-through"
        >  ${{ item.originalPrice }} </span>
        ${{ item.price }}
      </p>
      <p v-if="showDescription" class="text-sm text-gray-500">{{ item.description }}</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center opacity-0 group-hover transition-opacity duration-300">
      <button
          @click.stop="addToWishlist(item)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="text-black"></font-awesome-icon>
      </button>

      <button
          @click.stop="addToBasket(item)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
      </button>

      <button
          @click.stop="openQuickView(item)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
      </button>

      <button
          @click.stop="addToComparison(item)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']" />
      </button>
    </div>
  </div>

  <QuickViewModal
      v-if="showQuickView"
      :item="selectedItem"
      @close="closeQuickView"
  />
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCart } from "~/composables/useCart.js";

defineProps({
  item: {
    type: Object,
    required: true
  },
  showDescription: {
    type: Boolean,
    default: true // Default is to show the description
  }
});
let showQuickView = ref(false);
let selectedItem = ref(null);

const openQuickView = (item) => {
  selectedItem.value = item;
  showQuickView.value = true;
};

const closeQuickView = () => {
  showQuickView.value = false;
  selectedItem.value = null;
};

// Wishlist and Basket Functions
const addToWishlist = (item) => {
  console.log('Added to wishlist:', item);
}
const addToComparison = (item) => {
  console.log('Added to comparison list:', item);
};

const { addItem } = useCart();
const addToBasket = (item) => {
  console.log('item', item);
  addItem({ ...item, image: item.image });
};
</script>

<style scoped>
.group:hover .group-hover {
  opacity: 1;
  z-index: 9;
}

.hover-icon:hover i.fa-heart {
  color: red;
}

.hover-icon:hover i.fa-shopping-cart {
  color: #226dfb;
}

.hover-icon:hover i.fa-eye {
  color: gray;
}
</style>

