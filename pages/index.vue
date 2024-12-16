<template>
  <div>
    <MenuSection  class="hidden"/>
    <SaleBannerSliderSection class="mb-7" :slides="slides" :slide-type="slideTypeImage"/>
    <HeadingSection :header="'TRENDY LOOK'" :description="'You will definitely like this.'"/>
    <SaleBannerSliderSection class="mb-7 container max-w-6xl" :slides="products" :slide-type="slideTypeProduct" :settings="productSettings" />
    <VideoSection :video="'/videos/video.mp4'" />
    <BannerSection class="w-full my-5 object-cover h-3/4" :banner-image="'/images/banner2.png'" />
    <HeadingSection class="mt-7" :header="'TOWARDS INSPIRATION'"/>
    <NewProducts class="container m-auto max-w-6xl" :limit="3"/>
    <BannerSection class="w-full my-5 object-cover h-3/4" :banner-image="'/images/banner3.png'" />
    <HeadingSection class="mt-7" :header="'TOWARDS INSPIRATION'"/>
    <CategoriesSection class="max-w-6xl m-auto container" :limit="3" />
    <BannerSection class="w-full my-5 object-cover h-3/4" :banner-image="'/images/banner2.png'" />

<!--    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />-->
<!--    <div class="container mx-auto px-4">-->
<!--      <h3 class="text-center font-bold text-xl mt-8">Shop by Department</h3>-->
<!--      <DepartmentsSection :categories="categories" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"/>-->
<!--      <SliderSection class="my-7 px-1" :items="videoSlides" :settings="videoSettings" />-->
<!--      <BannerSection banner="/images/banner.webp" />-->
<!--      <SliderSection class="my-7" :items="products" :settings="imageSettings" />-->
<!--      <ShopBannerSection class="mb-7" background-image="images/banner1.webp" />-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { useCategory } from '~/composables/useCategory';
import {useProduct} from "~/composables/useProduct.js";
import '@fortawesome/fontawesome-svg-core/styles.css';

const { categories } = useCategory();

const { products } = useProduct();
const slides = [
  {
    backgroundImage: "/images/banner.png",
    title: "40% OFF",
    subtitle: "CYBER MONDAY",
  },
  {
    backgroundImage: "/images/banner.png",
    title: "50% OFF",
    subtitle: "BLACK FRIDAY",
  },
  {
    backgroundImage: "/images/banner.png",
    title: "70% OFF",
    subtitle: "YEAR-END SALE",
  },
];
const slideTypeImage = "image";
const slideTypeProduct = "product"

const productSettings = {
  slidesPerView: 1,
  breakpoints: {
    420: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 4 }
  },
  spaceBetween: 20,
  loop: true,
  pagination: { clickable: true },
};
</script>

