<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center py-4">
        <div
            v-for="(menuItem, index) in categories"
            :key="index"
            class="group"
        >
          <!-- Category Button -->
          <button
              @click="toggleMenu(menuItem.name)"
              class="text-white mr-4"
          >
            {{ menuItem.name }}
          </button>
            <!-- Submenu -->
            <div
                v-if="activeMenu === menuItem.name"
                class="absolute left-0 top-14 right-0 flex grid-rows-2 justify-end items-center mt-2 bg-white shadow-md z-50 p-5 pr-32 text-sm font-semibold text-gray-800"
            >
              <div class="flex justify-center items-baseline mr-24">
                <div
                    v-for="(link, linkIndex) in menuItem.subCategory"
                    :key="linkIndex"
                    class="relative group mr-5"
                >
                  <!-- Subcategory Name -->
                  <div class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto border-b-2  pr-32">
                    {{ link.name }}
                  </div>

                  <div v-if="link.subCategory" class="mt-2 space-y-1.5">
                    <div
                        v-for="(sublink, subIndex) in link.subCategory"
                        :key="subIndex"
                        class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto font-light cursor-pointer"
                    >
                      {{ sublink.name }}
                    </div>
                  </div>
                </div>
              </div>
              <img src="/images/yoga.png" alt="subcategory image" class="object-contain">
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useCategory } from '~/composables/useCategory.js';

const { categories } = useCategory();

const activeMenu = ref(null);

// Toggle main menu visibility
const toggleMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>

<style scoped>
.relative .absolute {
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
.block {
  visibility: visible;
  opacity: 1;
}
</style>