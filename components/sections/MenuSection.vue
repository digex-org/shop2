<template>
  <nav>
    <div class="max-w-7xl mx-auto px-0 md:px-4 lg:px-8"
         @mouseleave="closeMenu"
    >
      <div class="flex items-start md:items-center py-4 flex-col md:flex-row">
        <div
            v-for="(menuItem, index) in menus"
            :key="index"
            class="group"
        >
          <!-- menu Button -->
          <button
              @mouseover="toggleMenu(menuItem.name)"
              class="text-white mr-4 hover:text-gray-300"
          >
            {{ menuItem.name }}
          </button>
            <!-- Submenu -->
            <div
                v-if="activeMenu === menuItem.name"
                class="absolute left-0 right-0 lg:left-auto lg:right-auto top-14 flex grid-rows-1 md:grid-rows-2 justify-center lg:justify-end items-center mt-2 bg-white pr-0 shadow-md z-50 flex-col p-5 lg:pr-6 xl:pr-32 md:flex-row text-sm font-semibold text-gray-800"
            >
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 justify-center items-baseline mr-6 lg:mr-24 max-w-[44rem]">
                <div
                    v-for="(link, linkIndex) in menuItem.subMenu"
                    :key="linkIndex"
                    class="relative group mr-5"
                >
                  <!-- Submenu Name -->
                  <div class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto border-b-2 pr-12 lg:pr-24 xl:pr-32">
                    {{ link.name }}
                  </div>

                  <div v-if="link.subMenu" class="mt-2 space-y-1.5">
                    <div
                        v-for="(sublink, subIndex) in link.subMenu"
                        :key="subIndex"
                        class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto font-light cursor-pointer"
                    >
                      {{ sublink.name }}
                    </div>
                  </div>
                </div>
              </div>
              <img src="/images/yoga.png" alt="submenu image" class="object-contain sm:hidden md:block">
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import {useMenus} from '~/composables/useMenus'

const { menus } = useMenus();

const activeMenu = ref(null);
let subMenuTimeout = null;


// Toggle main menu visibility
const toggleMenu = (menu) => {
  if (subMenuTimeout) {
    clearTimeout(subMenuTimeout);
    subMenuTimeout = null;
  }
  activeMenu.value = menu;
};

const closeMenu = () => {
  subMenuTimeout = setTimeout(() => {
    activeMenu.value = null;
  }, 300);};
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