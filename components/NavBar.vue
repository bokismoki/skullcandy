<template>
  <nav class="navbar fixed top-0 z-50 w-full bg-black lg:px-6">
    <div class="container mx-auto px-3 py-1">
      <div class="flex justify-between items-center py-2">
        <button class="hoverScale hamburger_menu lg:hidden" @click="toggleIsSideNavOpen">
          <div class="line w-8 h-1 bg-white my-2" :class="{'top_active': isSideNavOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'opacity-0': isSideNavOpen}"></div>
          <div class="line w-8 h-1 bg-white my-2" :class="{'bottom_active': isSideNavOpen}"></div>
        </button>
        <div class="flex lg:items-center">
          <nuxt-link class="hoverScale inline-block lg:mr-5" :to="{name: 'index'}">
            <img class="w-40" src="~/assets/img/skullcandy_logo.jpg" alt="Skullcandy Logo" />
          </nuxt-link>
          <nuxt-link
            class="hidden cursor-pointer lg:inline text-white text-sm mr-5 pseudo"
            :to="{name: 'shop'}"
          >SHOP</nuxt-link>
          <a class="hidden lg:inline text-white text-sm pseudo" href="#">12 MOODS</a>
        </div>
        <div class="p-2 cursor-pointer lg:flex lg:items-center">
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5 pseudo" href="#">Location</a>
          <a class="hidden lg:inline text-white text-xs opacity-75 mr-5 pseudo" href="#">Support</a>
          <button
            v-if="$auth.loggedIn"
            @click="logout"
            @keydown.enter="logout"
            class="hoverScale hidden lg:inline w-5 h-5 mr-5"
          >
            <img src="~/assets/img/logout.svg" alt="Logout" />
          </button>
          <nuxt-link v-else class="hoverScale hidden lg:inline w-5 mr-5" :to="{name: 'signin'}">
            <img src="~/assets/img/user.svg" alt="User" />
          </nuxt-link>
          <img
            class="hidden lg:inline w-5 mr-5"
            src="~/assets/img/magnifying_glass.svg"
            alt="Magnifying glass"
            @click="toggleIsSearchOpen"
          />
          <button v-if="$auth.loggedIn" @click="toggleIsCartOpen" class="hoverScale w-5 flex">
            <img src="~/assets/img/cart.svg" alt="Shopping Cart" />
          </button>
        </div>
      </div>
      <Cart />
      <div v-if="isSearchOpen" class="hidden lg:block">
        <Search />
      </div>
      <transition name="nav-slide">
        <SideNav :isSideNavOpen="isSideNavOpen" />
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import SideNav from '~/components/SideNav'
import Cart from '~/components/Cart'
import Search from '~/components/Search'

export default {
  name: 'NavBar',
  components: {
    SideNav,
    Cart,
    Search
  },
  computed: {
    ...mapGetters(['isCartOpen', 'isSideNavOpen', 'isSearchOpen'])
  },
  methods: {
    toggleIsSideNavOpen() {
      this.$store.dispatch('toggleIsSideNavOpen', !this.isSideNavOpen)
    },
    toggleIsCartOpen() {
      this.$store.dispatch('toggleIsCartOpen', !this.isCartOpen)
    },
    toggleIsSearchOpen() {
      this.$store.dispatch('toggleIsSearchOpen', !this.isSearchOpen)
    },
    logout() {
      this.$auth.logout().then(() => {
        this.$store.dispatch('toggleIsCartOpen', false)
        this.$store.dispatch('toggleIsSideNavOpen', false)
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
.nav-slide-enter-active,
.nav-slide-leave-active {
  @apply transition-all;
  @apply transition-500;
}

.hamburger_menu .line {
  @apply relative;
  @apply transition-all;
  @apply transition-500;
}
.hamburger_menu .line:first-of-type {
  @apply top-0;
}
.hamburger_menu .line:last-of-type {
  @apply bottom-0;
}
.hamburger_menu .line.top_active {
  top: 12px;
  transform: rotate(45deg);
}
.hamburger_menu .line.bottom_active {
  bottom: 12px;
  transform: rotate(-45deg);
}

.pseudo {
  @apply relative;
}
.pseudo::before,
.pseudo::after {
  @apply absolute;
  @apply bg-white;
  @apply w-0;
  @apply bottom-0;
  @apply transition-all;
  @apply transition-500;
  content: '';
  height: 1px;
}
.pseudo::before {
  @apply left-0;
}
.pseudo::after {
  @apply right-0;
}
.pseudo:hover::before,
.pseudo:focus::before {
  @apply w-1/2;
}
.pseudo:hover::after,
.pseudo:focus::after {
  @apply w-1/2;
}

.hoverScale {
  @apply transition-transform;
  @apply transition-250;
}
.hoverScale:hover,
.hoverScale:focus {
  transform: scale(1.1);
}
</style>