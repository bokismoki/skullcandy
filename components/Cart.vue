<template>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['cartItems', 'cartLength', 'totalPrice', 'isCartOpen'])
  },
  methods: {
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
</style>