<template>
  <footer class="bg-black text-white">
    <div class="px-3 pt-10">
      <div class="text-center sm:w-1/2 sm:mx-auto xl:w-1/3">
        <h1 class="font-bold">HEAR IT FIRST</h1>
        <h2
          class="mt-2 mb-10 text-sm"
        >Sign up and save on your first order. Be the first to get access to limited-edition products, exclusive music performances, and athlete stories.</h2>
        <input
          class="text-center px-2 py-3 w-full text-black"
          placeholder="Email Address"
          type="text"
        />
      </div>
      <div
        class="md:flex md:items-start md:justify-between md:py-2 md:my-16 md:border-t-2 md:border-gray-700 lg:px-10"
      >
        <div class="mt-10">
          <h1 class="text-center text-sm font-semibold md:text-lg">FOLLOW US</h1>
          <div class="flex items-center justify-center mt-3">
            <img
              class="w-6 h-6 mx-3 cursor-pointer hover:opacity-75"
              src="~/assets/img/instagram.svg"
              alt="Instagram"
            />
            <img
              class="w-6 h-6 mx-3 cursor-pointer hover:opacity-75"
              src="~/assets/img/youtube.svg"
              alt="Youtube"
            />
            <img
              class="w-6 h-6 mx-3 cursor-pointer hover:opacity-75"
              src="~/assets/img/facebook.svg"
              alt="Facebook"
            />
            <img
              class="w-6 h-6 mx-3 cursor-pointer hover:opacity-75"
              src="~/assets/img/twitter.svg"
              alt="Twitter"
            />
          </div>
        </div>
        <div class="mt-10">
          <div class="md:hidden">
            <ul>
              <li
                class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700"
                @click="supportOpen = !supportOpen"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm">SUPPORT</span>
                  <span>
                    <img
                      class="plus w-5 h-5"
                      :class="{'active': supportOpen}"
                      src="~/assets/img/plus.svg"
                      alt="Plus"
                    />
                  </span>
                </div>
                <div class="mt-3" v-if="supportOpen">
                  <ul>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Help Center</a>
                    </li>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Contact Us</a>
                    </li>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Account</a>
                    </li>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Product Help</a>
                    </li>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Warranty</a>
                    </li>
                    <li class="text-xs my-1 hover:opacity-75">
                      <a href="#">Order Status</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700"
                @click="offersOpen = !offersOpen"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm">OFFERS</span>
                  <span>
                    <img
                      class="plus w-5 h-5"
                      :class="{'active': offersOpen}"
                      src="~/assets/img/plus.svg"
                      alt="Plus"
                    />
                  </span>
                </div>
                <div class="mt-3" v-if="offersOpen">
                  <ul>
                    <li class="text-xs my-1 hover:opacity-75">Compare</li>
                    <li class="text-xs my-1 hover:opacity-75">Custom Product</li>
                    <li class="text-xs my-1 hover:opacity-75">Bulk Orders</li>
                    <li class="text-xs my-1 hover:opacity-75">Student Discount</li>
                    <li class="text-xs my-1 hover:opacity-75">Press Releases</li>
                  </ul>
                </div>
              </li>
              <li
                class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700"
                @click="aboutOpen = !aboutOpen"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm">ABOUT</span>
                  <span>
                    <img
                      class="plus w-5 h-5"
                      :class="{'active': aboutOpen}"
                      src="~/assets/img/plus.svg"
                      alt="Plus"
                    />
                  </span>
                </div>
                <div class="mt-3" v-if="aboutOpen">
                  <ul>
                    <li class="text-xs my-1 hover:opacity-75">Our Story</li>
                    <li class="text-xs my-1 hover:opacity-75">Born in PC</li>
                    <li class="text-xs my-1 hover:opacity-75">Protect Our Winters</li>
                    <li class="text-xs my-1 hover:opacity-75">Careers</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="hidden md:flex md:justify-center">
            <ul class="mr-5 lg:mr-20">
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Help</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Center</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Contact</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Us</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Account</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Product</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Help</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Warranty</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Order</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Status</li>
            </ul>
            <ul class="mr-5 lg:mr-20">
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Compare</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Custom</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Product</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Bulk</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Orders</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Student</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Discount</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Press</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Releases</li>
            </ul>
            <ul>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Our Story</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Born in PC</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Protect Our Winters</li>
              <li class="text-sm cursor-pointer hover:opacity-75 xl:my-1">Careers</li>
            </ul>
          </div>
        </div>
        <div class="mt-10">
          <h1
            class="text-center text-sm font-semibold uppercase md:text-lg"
          >Subscribe to our podcast</h1>
          <div class="flex items-center justify-center mt-3">
            <a class="mx-3 hover:opacity-75" href="#">iTunes</a>
            <a class="mx-3 hover:opacity-75" href="#">Spotify</a>
            <a class="mx-3 hover:opacity-75" href="#">YouTube</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-700 p-5 sm:flex sm:items-center sm:justify-between">
      <p class="text-center text-gray-600 text-xs">
        <span class="cursor-pointer hover:text-gray-400">Privacy Policy</span> |
        <span class="cursor-pointer hover:text-gray-400">Terms of Use</span>
      </p>
      <p class="text-center text-gray-600 text-xs">&copy; 2019 Skullcandy.com All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      supportOpen: false,
      offersOpen: false,
      aboutOpen: false
    }
  }
}
</script>

<style scoped>
.plus {
  transition: transform 500ms;
}
.plus.active {
  transform: rotate(135deg);
}
</style>