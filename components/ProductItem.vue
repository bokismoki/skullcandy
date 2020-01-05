<template>
  <div>
    <div class="main-image-container cursor-pointer w-5/6 mx-auto">
      <img class="w-full" :src="product['main-image']" />
    </div>
    <div class="flex items-center justify-center">
      <div
        class="cursor-pointer p-2"
        v-for="(image, index) in product['small-images']"
        :key="index"
      >
        <img class="w-10" :src="image" />
      </div>
    </div>
    <div class="mt-2">
      <h1 class="text-center text-sm w-2/3 mx-auto md:w-full md:h-10">{{product.name}}</h1>
      <h2 class="text-center text-sm">${{product.price}}</h2>
    </div>
    <button
      @click="addItem(product)"
      class="bg-black text-white w-full my-2 py-4 font-black"
    >ADD TO CART</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    addItem(item) {
      if (this.$auth.loggedIn) {
        this.$store.dispatch('addItem', { ...item, quantity: 1 })
        this.$store.dispatch('toggleIsCartOpen', 1)
      } else {
        this.$notify({
          group: 'notification',
          title: 'Error caught:',
          type: 'error',
          text: 'Please sign in in order to make a purchase'
        })
      }
    }
  }
}
</script>

<style scoped>
.shop .main-image-container {
  transition: transform 250ms;
}
.shop .main-image-container:hover {
  transform: scale(1.02);
}
</style>