<template>
  <div
    class="fixed left-0 bottom-0 bg-black w-full lg:hidden overflow-y-auto"
    style="top: 64px; max-height: 70vh;"
    v-if="isSideNavOpen"
  >
    <ul class="text-white">
      <li class="flex flex-col cursor-pointer border-t-2 p-3 border-gray-700">
        <div
          class="flex items-center justify-between hover:opacity-75"
          @click="shopOpen = !shopOpen"
        >
          <nuxt-link :to="{name: 'shop'}" class="text-sm">SHOP</nuxt-link>
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
                <nuxt-link :to="{name: 'shop'}" class="text-sm">HEADPHONES</nuxt-link>
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
                <nuxt-link :to="{name: 'shop'}" class="text-sm">EARBUDS</nuxt-link>
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
                <nuxt-link :to="{name: 'shop'}" class="text-sm">ACCESSORIES</nuxt-link>
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
                  <li class="text-xs my-1 ml-2 hover:opacity-75">Backpacks, Travel Kits & Cases</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">Power Accessories</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">Hats</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">Speakers</li>
                  <li class="text-xs py-1 ml-2 hover:opacity-75">Shop All Accessories</li>
                </ul>
              </div>
            </li>
            <li class="text-xs my-1 ml-2 hover:opacity-75" @click="specialsOpen = !specialsOpen">
              <div class="flex items-center justify-between">
                <nuxt-link :to="{name: 'shop'}" class="text-sm">SPECIALS</nuxt-link>
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
      <li
        v-if="$auth.loggedIn"
        class="flex items-center border-t-2 p-3 border-gray-700 cursor-pointer"
      >
        <img
          @click="logout"
          class="lg:inline w-5 h-5 mr-5"
          src="~/assets/img/logout.svg"
          alt="Logout"
        />
        <span class="text-xs text-gray-500" @click="logout">Logout</span>
      </li>
      <nuxt-link v-if="!$auth.loggedIn" :to="{name: 'signin'}">
        <li class="flex items-center border-t-2 p-3 border-gray-700 cursor-pointer">
          <img class="w-5 mr-5" src="~/assets/img/user.svg" alt="User" />
          <span class="text-xs text-gray-500">Sign in</span>
        </li>
      </nuxt-link>
      <li class="flex items-center border-t-2 p-3 border-gray-700">
        <label for="search">
          <img class="w-5 mr-5" src="~/assets/img/magnifying_glass.svg" alt="Magnifying glass" />
        </label>
        <input
          id="search"
          class="text-xs bg-transparent w-full p-1"
          type="text"
          placeholder="Search"
          v-model="searchValue"
          @input="search"
        />
      </li>
    </ul>
    <div v-if="searchValue" class="my-2 px-3">
      <div v-for="item in searchItems" :key="item._id">
        <SearchItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchItem from '~/components/SearchItem'

export default {
  name: 'SideNav',
  props: ['isSideNavOpen'],
  components: {
    SearchItem
  },
  data() {
    return {
      shopOpen: false,
      supportOpen: false,
      locationOpen: false,
      headphonesOpen: false,
      earbudsOpen: false,
      accessoriesOpen: false,
      specialsOpen: false,
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters(['searchItems'])
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => {
        this.$store.dispatch('toggleIsCartOpen', false)
        this.$store.dispatch('toggleIsSideNavOpen', false)
      })
    },
    search() {
      if (this.searchValue.trim()) {
        this.$store.dispatch(
          'filterSearchItems',
          this.searchValue.toLowerCase().trim()
        )
      }
    }
  }
}
</script>

<style scoped>
.plus {
  @apply transition-transform;
  @apply transition-500;
}
.plus.active {
  transform: rotate(135deg);
}
</style>