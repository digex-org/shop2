<template>
  <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      class="w-full"
      :class="isProductSlide ? 'h-[360px]' : ' h-screen'"
      :pagination="{
        el: isProductSlide,
        type: 'bullets',
        clickable: true
      }"
      v-bind="settings"
      :modules="isProductSlide ? [Navigation, Pagination] : []"
      :navigation="isProductSlide"
  >
    <!-- Slider Items -->
    <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex slides-center justify-start bg-cover bg-center h-2/3"
        :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
    >
      <div v-if="slideType === 'image'">
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div class="relative z-10 max-w-screen-xl px-8 py-16 text-white md:py-24 lg:px-16">
          <h1 class="text-4xl font-bold lg:text-[255px] leading-[18rem]">{{ slide.title }}</h1>
          <p class="mt-4 text-lg lg:text-[5.5rem] tracking-[35px] leading-[4.5rem]">{{ slide.subtitle }}</p>
        </div>
      </div>

      <div v-else>
        <div class="group relative">
<!--          <NuxtLink :to="{ name: 'product-product', params: { product: slide.id } }">-->
            <div class="flex flex-col slides-center">
              <img
                  :src="slide.image"
                  alt="Product Image"
                  class="w-64 object-cover mb-4 rounded-lg shadow-md"
                  loading="lazy"
              />
              <p class="text-gray-800 font-semibold">{{ slide.title }}</p>
              <p class="font-semibold" :class="slide.originalPrice ? 'text-red-500' : 'text-gray-800' ">
                <span>FROM ${{ slide.price }}</span>
                <span
                    v-if="slide.originalPrice"
                    class="text-gray-400 ml-2 line-through"
                >
                    ${{ slide.originalPrice }}
                  </span>
              </p>
            </div>
<!--          </NuxtLink>-->

<!--          <div class="absolute top-2 right-2 flex flex-col slides-center opacity-0 group-hover transition-opacity duration-300">-->
<!--            &lt;!&ndash; Wishlist Icon &ndash;&gt;-->
<!--            <button-->
<!--                @click.stop="addToWishlist(slide)"-->
<!--                class="transparent p-2 rounded-full shadow-lg hover-icon"-->
<!--            >-->
<!--              <i class="fas fa-heart text-white"></i>-->
<!--            </button>-->

<!--            &lt;!&ndash; Basket Icon &ndash;&gt;-->
<!--            <button-->
<!--                @click.stop="addToBasket(slide)"-->
<!--                class="transparent p-2 rounded-full shadow-lg hover-icon"-->
<!--            >-->
<!--              <i class="fas fa-shopping-cart text-white"></i>-->
<!--            </button>-->

<!--            &lt;!&ndash; Quick View Icon &ndash;&gt;-->
<!--            <button-->
<!--                @click.stop="openQuickView(slide)"-->
<!--                class="transparent p-2 rounded-full shadow-lg hover-icon"-->
<!--            >-->
<!--              <i class="fas fa-eye text-white"></i>-->
<!--            </button>-->
<!--          </div>-->
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>

<script setup>
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Receive slides as a prop
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  slideType: {
    type: String
  },
  settings: {
    type: Object,
    default: () => ({}),
  },
});

const isProductSlide = computed(() =>
    props.slides.some(item => item.image && item.price) // Check if item has an image and price
);
</script>

<style>
/* Custom Swiper styles (optional) */
.swiper-pagination {
  bottom: 0!important;
  text-align: center!important;
}

.swiper-pagination-bullet {
  width: 16%;
  height: 8px;
  margin: 0 !important;
  background-color: #D9D9D9 !important;
  opacity: 0.6 !important;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  opacity: 1!important; /* Active line becomes fully opaque */
  background-color: #757575!important; /* Active line color */
}
/* Positioning navigation arrows outside the slide */
.swiper-button-next,
.swiper-button-prev {
  position: absolute!important;
  top: 50%!important;
  z-index: 10!important;
  color: black!important;
  transform: translateY(-50%)!important;
}

.swiper-button-next {
  right: -30px!important;  /* Moves the next button outside */
}

.swiper-button-prev {
  left: -30px!important;   /* Moves the previous button outside */
}
.swiper-slide {
  pointer-events: none; /* Prevent interaction with the clipped slides */
}
</style>
