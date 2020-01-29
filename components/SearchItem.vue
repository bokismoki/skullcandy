<template>
  <div class="mb-2 flex justify-start lg:justify-end">
    <nuxt-link :to="{name: 'product-id', params: {id: item._id}}" class="flex items-center w-auto">
      <img class="w-12 h-12 rounded-sm lg:hidden" :src="item['main-image']" alt="Item's main image" />
      <h1 class="text-white mr-5 text-xs">{{item.name}}</h1>
      <img
        class="w-12 h-12 rounded-sm hidden lg:inline"
        :src="item['main-image']"
        alt="Item's main image"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: ['item']
}
</script>

<style scoped>
</style>