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
          <img
            v-if="$auth.loggedIn"
            @click="logout"
            class="hidden lg:inline w-5 h-5 mr-5"
            src="~/assets/img/logout.svg"
            alt="Logout"
          />
          <nuxt-link
            v-if="!$auth.loggedIn"
            class="hidden lg:inline w-5 mr-5"
            :to="{name: 'signin'}"
          >
            <img src="~/assets/img/user.svg" alt="User" />
          </nuxt-link>
          <img
            class="hidden lg:inline w-5 mr-5"
            src="~/assets/img/magnifying_glass.svg"
            alt="Magnifying glass"
          />
          <img
            v-if="$auth.loggedIn"
            @click="toggleIsCartOpen"
            class="w-5"
            src="~/assets/img/cart.svg"
            alt="Shopping Cart"
          />
        </div>
      </div>
      <Cart />
      <transition name="nav-slide">
        <SideNav :menuOpen="menuOpen" />
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import SideNav from '~/components/SideNav'
import Cart from '~/components/Cart'

export default {
  name: 'NavBar',
  components: {
    SideNav,
    Cart
  },
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    ...mapGetters(['isCartOpen'])
  },
  methods: {
    toggleIsCartOpen() {
      if (this.isCartOpen) {
        this.$store.dispatch('toggleIsCartOpen', 0)
      } else {
        this.$store.dispatch('toggleIsCartOpen', 1)
      }
    },
    logout() {
      this.$auth.logout().then(() => {
        this.$store.dispatch('toggleIsCartOpen', 0)
      })
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