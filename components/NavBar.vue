<template>
  <nav class="navbar fixed top-0 z-50 w-full bg-black lg:px-6">
    <div class="px-3 py-1">
      <div class="flex justify-between items-center py-2">
        <div class="hamburger_menu cursor-pointer lg:hidden" @click="menuOpen = !menuOpen">
          <div class="line w-8 h-1 bg-white my-2" :class="{'top_active': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'opacity-0': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'bottom_active': menuOpen}"></div>
        </div>
        <div class="lg:flex lg:items-center">
          <img
            class="w-40 cursor-pointer lg:mr-5"
            src="~/assets/img/skullcandy_logo.jpg"
            alt="Skullcandy Logo"
          />
          <a class="hidden lg:inline text-white text-sm mr-5" href="#">SHOP</a>
          <a class="hidden lg:inline text-white text-sm" href="#">12 MOODS</a>
        </div>
        <div class="p-2 cursor-pointer lg:flex lg:items-center">
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5" href="#">Location</a>
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5" href="#">Support</a>
          <img class="hidden lg:inline w-5 mr-5" src="~/assets/img/user.svg" alt="User" />
          <img class="hidden lg:inline w-5 mr-5" src="~/assets/img/magnifying_glass.svg" alt="Magnifying glass" />
          <img class="w-5" src="~/assets/img/cart.svg" alt="Shopping Cart" />
        </div>
      </div>
      <transition name="slide">
        <div
          class="fixed left-0 bottom-0 bg-black w-full lg:hidden"
          style="top: 68px;"
          v-if="menuOpen"
        >
          <ul class="text-white">
            <li class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700">
              <div
                class="flex items-center justify-between hover:opacity-75"
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
              </div>
              <div class="mt-3" v-if="shopOpen">
                <ul>
                  <li class="text-xs my-1 ml-2">
                    <div
                      class="flex items-center justify-between hover:opacity-75"
                      @click="headphonesOpen = !headphonesOpen"
                    >
                      <span class="text-sm">HEADPHONES</span>
                      <span>
                        <img
                          class="plus w-5 h-5"
                          :class="{'active': headphonesOpen}"
                          src="~/assets/img/plus.svg"
                          alt="Plus"
                        />
                      </span>
                    </div>
                    <div class="mt-3" v-if="headphonesOpen">
                      <ul>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Wireless Headphones</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Wired Headphones</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Crusher ANC - NEW</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Shop All Headphones</li>
                      </ul>
                    </div>
                  </li>
                  <li class="text-xs my-1 ml-2">
                    <div
                      class="flex items-center justify-between hover:opacity-75"
                      @click="earbudsOpen = !earbudsOpen"
                    >
                      <span class="text-sm">EARBUDS</span>
                      <span>
                        <img
                          class="plus w-5 h-5"
                          :class="{'active': earbudsOpen}"
                          src="~/assets/img/plus.svg"
                          alt="Plus"
                        />
                      </span>
                    </div>
                    <div class="mt-3" v-if="earbudsOpen">
                      <ul>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">True Wireless</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Wireless Earbuds</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Wired Earbuds</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Indy True Wireless - NEW</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Sesh True Wireless - NEW</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Shop All Earbuds</li>
                      </ul>
                    </div>
                  </li>
                  <li class="text-xs my-1 ml-2">
                    <div
                      class="flex items-center justify-between hover:opacity-75"
                      @click="accessoriesOpen = !accessoriesOpen"
                    >
                      <span class="text-sm">ACCESSORIES</span>
                      <span>
                        <img
                          class="plus w-5 h-5"
                          :class="{'active': accessoriesOpen}"
                          src="~/assets/img/plus.svg"
                          alt="Plus"
                        />
                      </span>
                    </div>
                    <div class="mt-3" v-if="accessoriesOpen">
                      <ul>
                        <li
                          class="text-xs my-1 ml-2 hover:opacity-75"
                        >Backpacks, Travel Kits & Cases</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Power Accessories</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Hats</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Speakers</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Shop All Accessories</li>
                      </ul>
                    </div>
                  </li>
                  <li
                    class="text-xs my-1 ml-2 hover:opacity-75"
                    @click="specialsOpen = !specialsOpen"
                  >
                    <div class="flex items-center justify-between">
                      <span class="text-sm">SPECIALS</span>
                      <span>
                        <img
                          class="plus w-5 h-5"
                          :class="{'active': specialsOpen}"
                          src="~/assets/img/plus.svg"
                          alt="Plus"
                        />
                      </span>
                    </div>
                    <div class="mt-3" v-if="specialsOpen">
                      <ul>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">12 Moods</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Custom Product</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">New Arrivals</li>
                        <li class="text-xs py-1 ml-2 hover:opacity-75">Sale</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="cursor-pointer border-t-2 px-2 py-3 border-gray-700 hover:opacity-75">
              <span class="text-sm">12 MOODS</span>
            </li>
            <li class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700">
              <div
                class="flex items-center justify-between hover:opacity-75"
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
              </div>
              <div class="mt-3" v-if="supportOpen">
                <ul>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">HELP CENTER</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">PRODUCT HELP</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">WARRANTY</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">ORDER STATUS</li>
                </ul>
              </div>
            </li>
            <li class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700">
              <div
                class="flex items-center justify-between hover:opacity-75"
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
              </div>
              <div class="mt-3" v-if="locationOpen">
                <ul>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">NORTH AMERICA</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">EUROPE / MIDDLE EAST</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">AFRICA</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">ASIA</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">PACIFIC</li>
                </ul>
              </div>
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
      locationOpen: false,
      headphonesOpen: false,
      earbudsOpen: false,
      accessoriesOpen: false,
      specialsOpen: false
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