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
          <CartItem :item="item" :index="index" />
        </div>
      </div>
    </div>
    <h1 class="uppercase text-sm font-black" v-else>No items in the cart</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '~/components/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cartItems', 'cartLength', 'totalPrice', 'isCartOpen'])
  }
}
</script>

<style scoped>
</style>