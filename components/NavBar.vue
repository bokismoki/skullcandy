<template>
  <nav class="navbar fixed top-0 z-50 w-full bg-black">
    <div class="px-3 py-1">
      <div class="flex justify-between items-center py-2">
        <div class="hamburger_menu cursor-pointer" @click="menuOpen = !menuOpen">
          <div class="line w-8 h-1 bg-white my-2" :class="{'top_active': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'opacity-0': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'bottom_active': menuOpen}"></div>
        </div>
        <div>
          <img
            class="w-40 cursor-pointer"
            src="~/assets/img/skullcandy_logo.jpg"
            alt="Skullcandy Logo"
          />
        </div>
        <div class="p-2 cursor-pointer">
          <img class="w-5" src="~/assets/img/cart.svg" alt="Shopping Cart" />
        </div>
      </div>
      <transition name="slide">
        <div class="fixed left-0 bg-black w-full" style="top: 68px;" v-if="menuOpen">
          <ul class="text-white">
            <li
              class="flex items-center justify-between cursor-pointer border-t-2 p-3 border-gray-700 hover:opacity-75"
              @click="shopOpen = !shopOpen"
            >
              <span class="text-sm">SHOP</span>
              <span>
                <img
                  class="plus w-5 h-5"
                  :class="{'active': shopOpen}"
                  src="~/assets/img/plus.svg"
                  alt="Plus"
                />
              </span>
            </li>
            <li class="cursor-pointer border-t-2 px-2 py-3 border-gray-700 hover:opacity-75">
              <span class="text-sm">12 MOODS</span>
            </li>
            <li
              class="flex items-center justify-between cursor-pointer border-t-2 p-3 border-gray-700 hover:opacity-75"
              @click="supportOpen = !supportOpen"
            >
              <span class="text-sm">SUPPORT</span>
              <span>
                <img
                  class="plus w-5 h-5"
                  :class="{'active': supportOpen}"
                  src="~/assets/img/plus.svg"
                  alt="Plus"
                />
              </span>
            </li>
            <li
              class="flex items-center justify-between cursor-pointer border-t-2 p-3 border-gray-700 hover:opacity-75"
              @click="locationOpen = !locationOpen"
            >
              <span class="text-sm">LOCATION</span>
              <span>
                <img
                  class="plus w-5 h-5"
                  :class="{'active': locationOpen}"
                  src="~/assets/img/plus.svg"
                  alt="Plus"
                />
              </span>
            </li>
            <li class="flex items-center border-t-2 p-3 border-gray-700 cursor-pointer">
              <img class="w-5 mr-5" src="~/assets/img/user.svg" alt="User" />
              <span class="text-xs text-gray-500">Account</span>
            </li>
            <li class="flex items-center border-t-2 p-3 border-gray-700">
              <img class="w-5 mr-5" src="~/assets/img/magnifying_glass.svg" alt="Magnifying glass" />
              <input class="text-xs bg-transparent w-full" type="text" placeholder="Search" />
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
      shopOpen: false,
      supportOpen: false,
      locationOpen: false
    }
  }
}
</script>

<style scoped>
.slide-enter,
.slide-leave-to {
  left: -100%;
}
.slide-enter-to,
.slide-leave {
  left: 0px;
}
.slide-enter-active,
.slide-leave-active {
  transition: left 500ms;
}

.hamburger_menu .line {
  position: relative;
  transition: all 500ms;
}
.hamburger_menu .line:first-of-type {
  top: 0;
}
.hamburger_menu .line:last-of-type {
  bottom: 0;
}
.hamburger_menu .line.top_active {
  top: 12px;
  transform: rotate(45deg);
}
.hamburger_menu .line.bottom_active {
  bottom: 12px;
  transform: rotate(-45deg);
}

.plus {
  transition: transform 500ms;
}
.plus.active {
  transform: rotate(135deg);
}
</style>