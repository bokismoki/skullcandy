<template>
  <div>
    <nuxt-link class="anchor" :to="{name: 'product-id', params: {id: product._id}}">
      <div class="cursor-pointer w-5/6 mx-auto transition-transform transition-250">
        <img class="w-full" :src="product['main-image']" alt="Item's main image" />
      </div>
      <div class="flex items-center justify-center">
        <div
          class="cursor-pointer p-2"
          v-for="(image, index) in product['small-images']"
          :key="index"
        >
          <img class="w-10" :src="image" alt="Item's small image" />
        </div>
      </div>
      <div class="mt-2">
        <h1
          class="text-center text-sm w-2/3 mx-auto md:w-full md:h-10 cursor-pointer"
        >{{product.name}}</h1>
        <h2 class="text-center text-sm">${{product.price}}</h2>
      </div>
    </nuxt-link>
    <button
      @click="addItem(product)"
      class="bg-black text-white w-full my-2 py-4 font-black hover:shadow-outline focus:shadow-outline"
    >ADD TO CART</button>
  </div>
</template>

<script>
import { outputNotification } from '~/Utils'

export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    addItem(item) {
      if (this.$auth.loggedIn) {
        this.$store.dispatch('addItem', { ...item, quantity: 1 })
        this.$store.dispatch('toggleIsCartOpen', true)
      } else {
        outputNotification('Please sign in in order to make a purchase')
      }
    }
  }
}
</script>

<style scoped>
.anchor:hover > div:first-of-type,
.anchor:focus > div:first-of-type {
  transform: scale(1.02);
}
</style>