<template>
  <footer class="bg-black text-white">
    <div class="mx-auto px-3 pt-10">
      <div class="text-center sm:w-1/2 sm:mx-auto xl:w-1/3">
        <h1 class="font-bold">HEAR IT FIRST</h1>
        <h2
          class="mt-2 mb-10 text-sm"
        >Sign up and save on your first order. Be the first to get access to limited-edition products, exclusive music performances, and athlete stories.</h2>
        <label class="text-sm" for="emailFooter">Subscribe:</label>
        <input
          class="text-center px-2 py-3 mt-2 w-full text-black"
          id="emailFooter"
          placeholder="Email Address"
          type="text"
        />
      </div>
      <div
        class="md:flex md:items-start md:justify-between md:py-2 md:my-16 md:border-t-2 md:border-gray-700"
      >
        <div
          class="container mx-auto md:flex md:items-start md:justify-between md:py-2 md:my-10 lg:px-10"
        >
          <div class="mt-10">
            <h1 class="text-center text-sm font-semibold md:text-lg">FOLLOW US</h1>
            <div class="flex items-center justify-center mt-3">
              <a href="#" class="hoverScale w-6 h-6 mx-3">
                <img src="~/assets/img/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" class="hoverScale w-6 h-6 mx-3">
                <img src="~/assets/img/youtube.svg" alt="Youtube" />
              </a>
              <a href="#" class="hoverScale w-6 h-6 mx-3">
                <img src="~/assets/img/facebook.svg" alt="Facebook" />
              </a>
              <a href="#" class="hoverScale w-6 h-6 mx-3">
                <img src="~/assets/img/twitter.svg" alt="Twitter" />
              </a>
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
                        class="plus w-5 h-5 transition-transform transition-500"
                        :class="{'active': supportOpen}"
                        src="~/assets/img/plus.svg"
                        alt="Plus"
                      />
                    </span>
                  </div>
                  <div class="mt-3" v-if="supportOpen">
                    <ul>
                      <li class="text-xs my-1">
                        <a href="#">Help Center</a>
                      </li>
                      <li class="text-xs my-1">
                        <a href="#">Contact Us</a>
                      </li>
                      <li class="text-xs my-1">
                        <a href="#">Account</a>
                      </li>
                      <li class="text-xs my-1">
                        <a href="#">Product Help</a>
                      </li>
                      <li class="text-xs my-1">
                        <a href="#">Warranty</a>
                      </li>
                      <li class="text-xs my-1">
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
                        class="plus w-5 h-5 transition-transform transition-500"
                        :class="{'active': offersOpen}"
                        src="~/assets/img/plus.svg"
                        alt="Plus"
                      />
                    </span>
                  </div>
                  <div class="mt-3" v-if="offersOpen">
                    <ul>
                      <li class="text-xs my-1">Compare</li>
                      <li class="text-xs my-1">Custom Product</li>
                      <li class="text-xs my-1">Bulk Orders</li>
                      <li class="text-xs my-1">Student Discount</li>
                      <li class="text-xs my-1">Press Releases</li>
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
                        class="plus w-5 h-5 transition-transform transition-500"
                        :class="{'active': aboutOpen}"
                        src="~/assets/img/plus.svg"
                        alt="Plus"
                      />
                    </span>
                  </div>
                  <div class="mt-3" v-if="aboutOpen">
                    <ul>
                      <li class="text-xs my-1">Our Story</li>
                      <li class="text-xs my-1">Born in PC</li>
                      <li class="text-xs my-1">Protect Our Winters</li>
                      <li class="text-xs my-1">Careers</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="hidden md:flex md:justify-center">
              <ul class="mr-5 lg:mr-20">
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Help</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Center</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Contact</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Us</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Account</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Product</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Help</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Warranty</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Order</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Status</a>
                </li>
              </ul>
              <ul class="mr-5 lg:mr-20">
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Compare</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Custom</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Product</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Bulk</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Orders</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Student</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Discount</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Press</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Releases</a>
                </li>
              </ul>
              <ul>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Our Story</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Born in PC</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Protect Our Winters</a>
                </li>
                <li class="xl:my-1">
                  <a href="#" class="hoverScale inline-block text-sm">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10">
            <h1
              class="text-center text-sm font-semibold uppercase md:text-lg"
            >Subscribe to our podcast</h1>
            <div class="flex items-center justify-center mt-3">
              <a class="hoverScale mx-3" href="#">iTunes</a>
              <a class="hoverScale mx-3" href="#">Spotify</a>
              <a class="hoverScale mx-3" href="#">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 border-t-2 border-gray-700">
      <div class="container mx-auto p-5 sm:flex sm:items-center sm:justify-between">
        <p class="text-center text-gray-600 text-xs">
          <a
            href="#"
            class="cursor-pointer hover:text-gray-400 focus:text-gray-400 transition-color transition-250"
          >Privacy Policy</a> |
          <a
            href="#"
            class="cursor-pointer hover:text-gray-400 focus:text-gray-400 transition-color transition-250"
          >Terms of Use</a>
        </p>
        <p class="text-center text-gray-600 text-xs">&copy; 2019 Skullcandy.com All Rights Reserved</p>
      </div>
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
.plus.active {
  transform: rotate(135deg);
}

.hoverScale {
  @apply transition-transform;
  @apply transition-100;
}
.hoverScale:hover,
.hoverScale:focus {
  transform: scale(1.1);
}
</style>