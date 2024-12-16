<template>
  <header class="p-4 bg-black relative">
    <div class="container justify-between md:m-auto flex md:justify-end items-center flex-wrap w-full">
      <div class="flex lg:m-auto">
        <!-- Logo Section -->
        <div class="flex justify-between items-center ml-auto w-full md:w-auto">
          <div class="text-center">
            <NuxtLink to="/">
              <img src="/images/logo.png" alt="logo" class="mr-5">
            </NuxtLink>
          </div>
          <button class="text-white md:hidden" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <span v-if="!isMobileMenuOpen">&#9776;</span>
            <span v-else>&times;</span>
          </button>
        </div>
        <div class="hidden md:block">
          <MenuSection/>
        </div>
      </div>
      <!-- Desktop Menu -->
      <div class="hidden md:flex justify-between items-center w-full md:w-auto">
        <!-- Icons Section -->
        <div class="flex items-center justify-between space-x-6">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/">
              <client-only>
                <font-awesome-icon icon="shopping-cart" class="text-white" />
              </client-only>
            </NuxtLink>
            <NuxtLink to="/">
              <client-only>
                <font-awesome-icon :icon="['far', 'heart']" class="text-white" />
              </client-only>
            </NuxtLink>

            <!-- Divider -->
            <div class="border-l border-white h-5"></div>
            <NuxtLink to="/" class="hover:underline text-white">researcher</NuxtLink>
          </div>
          <nav class="hidden md:flex space-x-4 text-white">
            <NuxtLink to="/" class="hover:underline">Help</NuxtLink>
            <div class="border-l border-white h-5"></div>
            <NuxtLink to="/" class="hover:underline">Login</NuxtLink>
            <div class="border-l border-white h-5"></div>
            <NuxtLink to="/" class="hover:underline">Join Us</NuxtLink>
          </nav>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
          v-if="isMobileMenuOpen"
          class="w-full bg-black text-white flex flex-col items-start space-y-4 p-4 md:hidden"
      >
        <MenuSection />
        <nav class="flex flex-col space-y-2 text-white">
          <NuxtLink to="/" class="hover:underline">Help</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Login</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Join Us</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
</style>
