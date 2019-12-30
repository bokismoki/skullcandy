<template>
  <nav class="navbar fixed top-0 z-50 w-full bg-black lg:px-6">
    <div class="container mx-auto px-3 py-1">
      <div class="flex justify-between items-center py-2">
        <div class="hamburger_menu cursor-pointer lg:hidden" @click="menuOpen = !menuOpen">
          <div class="line w-8 h-1 bg-white my-2" :class="{'top_active': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'opacity-0': menuOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'bottom_active': menuOpen}"></div>
        </div>
        <div class="lg:flex lg:items-center">
          <nuxt-link class="cursor-pointer lg:mr-5" :to="{name: 'index'}">
            <img class="w-40" src="~/assets/img/skullcandy_logo.jpg" alt="Skullcandy Logo" />
          </nuxt-link>
          <nuxt-link
            class="hidden cursor-pointer lg:inline text-white text-sm mr-5"
            :to="{name: 'shop'}"
          >SHOP</nuxt-link>
          <a class="hidden lg:inline text-white text-sm" href="#">12 MOODS</a>
        </div>
        <div class="p-2 cursor-pointer lg:flex lg:items-center">
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5" href="#">Location</a>
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5" href="#">Support</a>
          <nuxt-link class="hidden lg:inline w-5 mr-5" :to="{name: 'signin'}">
            <img src="~/assets/img/user.svg" alt="User" />
          </nuxt-link>
          <img
            class="hidden lg:inline w-5 mr-5"
            src="~/assets/img/magnifying_glass.svg"
            alt="Magnifying glass"
          />
          <img
            @click="toggleIsCartOpen"
            class="w-5"
            src="~/assets/img/cart.svg"
            alt="Shopping Cart"
          />
        </div>
      </div>
      <div
        class="relative bg-white w-full p-5 overflow-y-auto"
        style="min-height: 150px; max-height: 70vh;"
        v-if="isCartOpen"
      >
        <div v-if="cartLength">
          <div
            class="absolute bg-black text-white rounded-lg px-2 py-1 flex flex-col items-center"
            style="top: 1rem; right: 1rem;"
          >
            <p>TOTAL PRICE:</p>
            <p class="font-semibold">${{totalPrice.toFixed(2)}}</p>
          </div>
          <h1 class="font-black lg:text-3xl">CART ITEMS</h1>
          <div class="my-5">
            <div class="mt-2" v-for="(item, index) in cartItems" :key="item._id">
              <div class="flex items-center">
                <div class="w-1/2 md:w-auto">
                  <h1 class="text-sm font-semibold lg:text-base">{{item.name}}</h1>
                  <p class="text-sm font-semibold lg:text-base">Q: {{item.quantity}}</p>
                  <p class="text-sm font-semibold lg:text-base">${{item.price}}</p>
                  <div class="flex items-center">
                    <div
                      @click="removeItem(index)"
                      class="cursor-pointer text-4xl"
                      style="color: crimson;"
                    >&times;</div>
                    <div
                      @click="updateQuantity(1, item._id)"
                      class="cursor-pointer text-green-900 text-xl ml-5"
                    >&#9651;</div>
                    <div
                      @click="updateQuantity(0, item._id, index)"
                      class="cursor-pointer text-xl ml-2"
                      style="color: crimson;"
                    >&#9661;</div>
                  </div>
                </div>
                <img :src="item['main-image']" style="width: 200px;" />
              </div>
            </div>
          </div>
        </div>
        <h1 class="uppercase text-sm font-black" v-else>No items in the cart</h1>
      </div>
      <transition name="nav-slide">
        <SideNav :menuOpen="menuOpen" />
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import SideNav from '~/components/SideNav'

export default {
  name: 'NavBar',
  components: {
    SideNav
  },
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartLength', 'totalPrice', 'isCartOpen'])
  },
  methods: {
    toggleIsCartOpen() {
      if (this.isCartOpen) {
        this.$store.dispatch('toggleIsCartOpen', 0)
      } else {
        this.$store.dispatch('toggleIsCartOpen', 1)
      }
    },
    removeItem(index) {
      this.$store.dispatch('removeItem', index)
    },
    updateQuantity(change, _id, index) {
      if (change === 1) {
        this.$store.dispatch('updateQuantity', { change, _id })
      } else {
        this.$store.dispatch('updateQuantity', { change, _id, index })
      }
    }
  }
}
</script>

<style scoped>
.nav-slide-enter,
.nav-slide-leave-to {
  left: -100%;
}
.nav-slide-enter-to,
.nav-slide-leave {
  left: 0px;
}
.nav-slide-enter-active,
.nav-slide-leave-active {
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
</style>