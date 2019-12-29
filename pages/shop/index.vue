<template>
  <div class="container mx-auto shop" style="margin-top: 68px;">
    <div class="py-10 px-5 sm:max-w-lg sm:mx-auto md:max-w-5/6 md:min-w-full">
      <h1 class="text-center font-black text-4xl md:text-5xl">SHOP</h1>
      <div class="my-10 md:max-w-lg md:mx-auto">
        <div class="flex flex-col md:flex-row">
          <button
            @click="filter = 'headphones'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1"
          >HEADPHONES</button>
          <button
            @click="filter = 'earbuds'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1"
          >EARBUDS</button>
        </div>
        <div class="flex flex-col md:flex-row">
          <button
            @click="filter = 'speakers'"
            class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1"
          >SPEAKERS</button>
          <button @click="filter = 'all'" class="bg-gray-300 my-1 py-4 text-xs md:w-1/2 md:mx-1">ALL</button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div
          class="my-5 md:w-1/2 md:px-1 lg:w-2/6"
          v-for="product in products"
          :key="product._id"
          v-if="product.category.includes(filter)"
        >
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  head: {
    title: 'Shop'
  },
  asyncData(context) {
    return context.$axios.get('/products/get').then(products => {
      return {
        products: products.data
      }
    })
  },
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    addItem(item) {
      this.$store.dispatch('addItem', { ...item, quantity: 1 })
      this.$store.dispatch('toggleIsCartOpen', 1)
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

@media (min-width: 1024px) {
  .shop {
    margin-top: 61px !important;
  }
}
</style>