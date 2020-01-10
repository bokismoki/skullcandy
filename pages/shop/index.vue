<template>
  <div class="shop container mx-auto" style="margin-top: 68px;">
    <div class="py-10 px-5 sm:max-w-lg sm:mx-auto md:max-w-5/6 md:min-w-full">
      <h1 class="text-center font-black text-4xl md:text-5xl">SHOP</h1>
      <div class="my-10 md:max-w-lg md:mx-auto">
        <div class="flex flex-col md:flex-row">
          <button
            @click="filter = 'headphones'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1 hover:bg-gray-400 focus:bg-gray-400 transition-bg transition-250"
            :class="{'active': filter === 'headphones'}"
          >HEADPHONES</button>
          <button
            @click="filter = 'earbuds'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1 hover:bg-gray-400 focus:bg-gray-400 transition-bg transition-250"
            :class="{'active': filter === 'earbuds'}"
          >EARBUDS</button>
        </div>
        <div class="flex flex-col md:flex-row">
          <button
            @click="filter = 'speakers'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1 hover:bg-gray-400 focus:bg-gray-400 transition-bg transition-250"
            :class="{'active': filter === 'speakers'}"
          >SPEAKERS</button>
          <button
            @click="filter = 'all'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1 hover:bg-gray-400 focus:bg-gray-400 transition-bg transition-250"
            :class="{'active': filter === 'all'}"
          >ALL</button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div
          class="my-5 md:w-1/2 md:px-1 lg:w-2/6"
          v-for="product in products"
          :key="product._id"
          v-if="product.category.includes(filter)"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from '~/components/ProductItem'

export default {
  name: 'Shop',
  head: {
    title: 'Shop'
  },
  components: {
    ProductItem
  },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style scoped>
.shop button.active {
  @apply bg-gray-500;
}

@media (min-width: 1024px) {
  .shop {
    margin-top: 61px !important;
  }
}
</style>