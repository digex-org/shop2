<template>
  <footer
      class="bg-black text-white py-10 bg-no-repeat bg-left-bottom"
      :style="{ backgroundImage: `url(/images/gradient.png)` }"
  >
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between px-4 sm:px-6 lg:px-8">
      <!-- Left Section -->
      <div class="space-y-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-normal !leading-[40px] sm:!leading-[50px]">
          Ready to <span class="font-black">revolutionise</span> your business communications <br />
          with <span class="font-black">unrivalled speed</span>?
        </h2>
        <!-- Get In Touch Button -->
        <div class="my-6">
          <a
              href="#"
              class="text-gradient-2 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-teal-500 transition"
          >
            Get In Touch
          </a>
        </div>
        <!-- Social Media Icons -->
        <div class="flex justify-start space-x-4 sm:space-x-6 py-5 px-1">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-xl sm:text-2xl hover:text-teal-400 cursor-pointer" />
          <font-awesome-icon :icon="['fab', 'twitter']" class="text-xl sm:text-2xl hover:text-teal-400 cursor-pointer" />
          <font-awesome-icon :icon="['fab', 'facebook']" class="text-xl sm:text-2xl hover:text-teal-400 cursor-pointer" />
          <font-awesome-icon :icon="['fab', 'youtube']" class="text-xl sm:text-2xl hover:text-teal-400 cursor-pointer" />
          <font-awesome-icon :icon="['fab', 'tiktok']" class="text-xl sm:text-2xl hover:text-teal-400 cursor-pointer" />
        </div>
        <div class="text-[80px] sm:text-[140px] font-bold mb-6 text-gradient py-2">
          <h2>Follow Us</h2>
        </div>
        <div class="text-sm">
          <p class="font-extrabold">PRIVACY POLICY</p>
          <p>
            Copyright © 2024 <span class="font-extrabold">DIGEX LLC Inc.</span> Yerevan, Armenia.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col justify-between space-y-6">
        <!-- Newsletter -->
        <div>
          <h3 class="text-xl sm:text-2xl font-light">
            Subscribe to our newsletter for daily industry insights.
          </h3>
          <div class="my-4 flex">
            <input
                type="email"
                placeholder="Email address *"
                class="w-full bg-transparent border-white border text-white px-4 py-2 focus:outline-none"
            />
          </div>
          <!-- Help & Company Links -->
          <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4 text-sm">
            <div>
              <h4 class="font-bold mb-2 text-gray-500">Help</h4>
              <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Contact Us</a></li>
                <li><a href="#" class="hover:underline">FAQs</a></li>
                <li><a href="#" class="hover:underline">Order Support</a></li>
                <li><a href="#" class="hover:underline">Shipping</a></li>
                <li><a href="#" class="hover:underline">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2 text-gray-600">The Company</h4>
              <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Jobs</a></li>
                <li><a href="#" class="hover:underline">Locations</a></li>
                <li><a href="#" class="hover:underline">My Account</a></li>
                <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" class="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <div>
            <h3 class="text-2xl font-light mb-2">Call Us</h3>
            <p class="text-sm text-gray-600 mb-1">Phone:</p>
            <p>+374 55 20 20 20</p>
            <p class="text-sm text-gray-600 mb-1 mt-4">Email:</p>
            <p>info@digexllc.org</p>
          </div>
          <div>
            <select
                class="bg-transparent text-white py-2 rounded-md focus:outline-none"
            >
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
          <div class="text-center">
            <a href="#" class="text-white hover:text-green-500">
              <i class="fas fa-chevron-up text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(160deg, #29B6F4 30%, #E1C9DF 41%, #ee00ff 87%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-2 {
  background: linear-gradient(160deg, #40DB5C, #03C7FD, #40DB5C);
  -webkit-text-fill-color: white;
}
</style>
