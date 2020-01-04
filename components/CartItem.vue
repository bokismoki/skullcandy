<template>
  <div class="flex items-center">
    <img class="mr-5" :src="item['main-image']" style="width: 200px;" />
    <div class="w-1/2 md:w-auto">
      <h1 class="text-sm font-semibold lg:text-base">{{item.name}}</h1>
      <p class="text-sm font-semibold lg:text-base">${{item.price}}</p>
      <div
        @click="removeItem(index)"
        class="cursor-pointer text-xs font-bold tracking-wide"
        style="color: crimson;"
      >REMOVE</div>
      <div class="flex items-center mt-2">
        <p class="text-sm font-semibold lg:text-base">Q: {{item.quantity}}</p>
        <div class="flex flex-col items-center ml-5">
          <div
            @click="updateQuantity(1, item._id, index)"
            class="cursor-pointer text-green-900 text-xl"
          >&#9651;</div>
          <div
            @click="updateQuantity(0, item._id, index)"
            class="cursor-pointer text-xl"
            style="color: crimson;"
          >&#9661;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item', 'index'],
  methods: {
    removeItem(index) {
      this.$store.dispatch('removeItem', index)
    },
    updateQuantity(change, _id, index) {
      if (change) {
        this.$store.dispatch('updateQuantity', { change, _id, index })
      } else {
        this.$store.dispatch('updateQuantity', { change, _id, index })
      }
    }
  }
}
</script>

<style scoped>
</style>