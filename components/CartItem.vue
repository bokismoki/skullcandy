<template>
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
          @click="updateQuantity(1, item._id, index)"
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