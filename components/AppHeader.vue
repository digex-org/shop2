<template>
  <header class="p-4 bg-black relative">
    <div class="container m-auto flex justify-start items-center">
      <!-- Logo Section -->
      <div class="flex justify-between items-center m-auto">
        <div class="text-center">
          <NuxtLink to="/#">
            <img src="/images/logo.png" alt="logo" class="mr-5">
          </NuxtLink>
        </div>
        <MenuSection />
<!--        <nav class="flex space-x-6 text-white font-bold">-->
<!--          <NuxtLink to="/#" class="hover:underline">men</NuxtLink>-->
<!--          <NuxtLink to="/#" class="hover:underline">women</NuxtLink>-->
<!--          <NuxtLink to="/#" class="hover:underline">kids</NuxtLink>-->
<!--          <NuxtLink to="/#" class="hover:underline">accessories</NuxtLink>-->
<!--          <NuxtLink to="/#" class="hover:underline">sale</NuxtLink>-->
<!--          <NuxtLink to="/#" class="hover:underline">gift</NuxtLink>-->
<!--        </nav>-->
      </div>
      <!-- Icons Section -->
      <div class="flex items-center justify-between space-x-6 w-[28%]">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/">
            <client-only>
              <font-awesome-icon icon="shopping-cart" class="text-white" />
            </client-only>
          </NuxtLink>
          <NuxtLink to="/">
            <client-only>
              <font-awesome-icon icon="heart" class="text-white" />
            </client-only>
          </NuxtLink>

          <!-- Divider -->
          <div class="border-l border-white h-5"></div>
          <NuxtLink to="/" class="hover:underline text-white">researcher</NuxtLink>

        </div>
        <nav class="flex space-x-4 text-white">
          <NuxtLink to="/" class="hover:underline">Help</NuxtLink>
          <div class="border-l border-white h-5"></div>
          <NuxtLink to="/" class="hover:underline">Login</NuxtLink>
          <div class="border-l border-white h-5"></div>
          <NuxtLink to="/" class="hover:underline">Join Us</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<style scoped>
</style>
