<template>
  <div class="product container mx-auto" style="margin-top: 68px;">
    <div class="flex flex-col justify-center items-center px-8 pt-5 md:py-20">
      <div class="text-center md:flex md:items-center md:justify-between">
        <div class="md:text-left md:mr-20 left">
          <h2 class="text-xs font-semibold xl:text-sm">ON SALE</h2>
          <h1 class="text-4xl font-black leading-none uppercase xl:text-5xl">
            Connected,
            <br />Not tied
            <br />Down.
          </h1>
          <h1 class="font-semibold text-lg xl:text-xl">{{product.name}}</h1>
          <h2 class="font-black mt-2 text-sm xl:text-md">
            <span class="opacity-75 sale-price relative">${{(product.price * 1.1).toFixed(2)}}</span>
            <span>${{product.price}}</span>
          </h2>
          <div class="hidden md:relative md:block md:bg-black md:p-3 md:mt-5 md:rounded-lg">
            <button
              class="flex w-full items-center justify-between bg-white cursor-pointer px-5 py-2 hover:shadow-outline focus:shadow-outline"
              @click="colorOptionsOpen = !colorOptionsOpen"
            >
              <img class="w-10 h-10" :src="product['small-images'][0]" alt="Item's small image" />
              <span>
                <div
                  class="text-3xl plus transition-transform transition-500"
                  :class="{'active': colorOptionsOpen}"
                >&plus;</div>
              </span>
            </button>
            <div class="absolute w-2/3" v-if="colorOptionsOpen">
              <div
                v-for="(image, index) in product['small-images']"
                :key="index"
                @click="colorOptionsOpen = false"
              >
                <div v-if="index !== 0" class="bg-white cursor-pointer px-5 py-2">
                  <img class="w-10 h-10" :src="image" alt="Item's small image" />
                </div>
              </div>
            </div>
            <div class="flex items-center mt-3">
              <label class="text-white mr-2 cursor-pointer" for="quantity2">Q</label>
              <input
                id="quantity2"
                class="mr-3 w-12 h-12 text-center"
                type="text"
                v-model="quantity"
              />
              <button
                class="bg-white w-full self-stretch text-sm font-semibold hover:shadow-outline focus:shadow-outline"
                @click="addItem"
              >ADD TO CART</button>
            </div>
          </div>
        </div>
        <img
          class="w-2/3 mx-auto mt-5 lg:w-1/2"
          :src="product['main-image']"
          alt="Item's main image"
        />
      </div>
      <div class="w-screen px-8 pt-3 py-10 mt-16 bg-black md:hidden">
        <div class="md:w-5/6 md:mx-auto">
          <button
            class="flex w-full items-center justify-between bg-white cursor-pointer px-5 py-2 hover:shadow-outline focus:shadow-outline"
            @click="colorOptionsOpen = !colorOptionsOpen"
          >
            <img class="w-10 h-10" :src="product['small-images'][0]" alt="Item's small image" />
            <span>
              <div class="text-3xl plus" :class="{'active': colorOptionsOpen}">&plus;</div>
            </span>
          </button>
          <div v-if="colorOptionsOpen">
            <div
              v-for="(image, index) in product['small-images']"
              :key="index"
              @click="colorOptionsOpen = false"
            >
              <div v-if="index !== 0" class="bg-white cursor-pointer px-5 py-2">
                <img class="w-10 h-10" :src="image" alt="Item's small image" />
              </div>
            </div>
          </div>
          <div class="flex items-center mt-3">
            <label class="text-white mr-2 cursor-pointer" for="quantity">Q</label>
            <input id="quantity" class="mr-3 w-12 h-12 text-center" type="text" v-model="quantity" />
            <button
              class="bg-white w-full self-stretch text-sm font-semibold hover:shadow-outline focus:shadow-outline"
              @click="addItem"
            >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { outputNotification } from '~/Utils'

export default {
  name: 'Product',
  head() {
    return {
      title: this.product.name
    }
  },
  data() {
    return {
      product: {},
      quantity: 1,
      colorOptionsOpen: false
    }
  },
  methods: {
    addItem() {
      if (this.$auth.loggedIn) {
        if (!isNaN(Number(this.quantity)) && Number(this.quantity) > 0) {
          this.$store.dispatch('addItem', {
            ...this.product,
            quantity: Number(this.quantity)
          })
          this.$store.dispatch('toggleIsCartOpen', true)
        } else {
          outputNotification('Please use the right number')
        }
        this.quantity = 1
      } else {
        outputNotification('Please sing in in order to make a purchase')
      }
    }
  },
  asyncData({ store, params, redirect }) {
    const product = store.getters.product(params.id)
    if (product) {
      return {
        product
      }
    } else {
      redirect({ name: 'index' })
    }
  }
}
</script>

<style scoped>
.product .sale-price::after {
  @apply absolute;
  @apply bg-black;
  content: '';
  width: 110%;
  height: 1px;
  left: -2px;
  top: 50%;
}

.plus.active {
  transform: rotate(135deg);
}

@media (min-width: 1024px) {
  .product {
    margin-top: 61px !important;
  }
}
@media (min-width: 768px) {
  .left {
    max-width: 400px;
  }
}
</style>