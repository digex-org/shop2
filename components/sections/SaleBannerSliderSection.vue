<template>
  <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      class="w-full"
      :class="responsiveHeight"
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
        class="relative flex items-center justify-start bg-cover bg-center"
        :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
    >
      <div v-if="slideType === 'image'">
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div class="relative z-10 max-w-screen-xl px-8 py-16 text-white md:py-24 lg:px-16">
          <h1 class="text-6xl lg:text-9xl xl:text-[255px] leading-[3rem] lg:leading-[5rem] xl:leading-[18rem] font-bold">
            {{ slide.title }}
          </h1>
          <p class="mt-4 text-3xl lg:text-5xl xl:text-[5.5rem] tracking-wide md:tracking-[15px] lg:tracking-[35px] leading-6 lg:leading-[4.5rem]">
            {{ slide.subtitle }}
          </p>
        </div>
      </div>

      <div v-else>
        <ProductCard :item="slide" :showDescription="false"/>
      </div>
    </swiper-slide>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>

<script setup>
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
    type: String,
  },
  settings: {
    type: Object,
    default: () => ({}),
  },
});

const isProductSlide = computed(() =>
    props.slides.some((item) => item.image && item.price) // Check if item has an image and price
);

const responsiveHeight = computed(() =>
    isProductSlide.value
        ? 'h-[340px] md:h-[360px] lg:h-[365px]'
        : 'h-[300px] md:h-[90vh] lg:h-screen'
);
</script>

<style>
.swiper-pagination {
  bottom: 0 !important;
  text-align: center !important;
}

.swiper-pagination-bullet {
  width: 16%;
  height: 8px;
  margin: 0 !important;
  background-color: #d9d9d9 !important;
  opacity: 0.6 !important;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  opacity: 1 !important; /* Active line becomes fully opaque */
  background-color: #757575 !important; /* Active line color */
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute !important;
  top: 50% !important;
  z-index: 10 !important;
  color: black !important;
  transform: translateY(-50%) !important;
}

.swiper-button-next {
  right: -30px !important; /* Moves the next button outside */
}

.swiper-button-prev {
  left: -30px !important; /* Moves the previous button outside */
}

</style>
