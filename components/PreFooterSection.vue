<template>
  <section class="pre-footer-section">
    <div
      class="section h-screen relative sm:hidden"
      :style="'background: url(' + requireImage + ') center/cover no-repeat'"
    >
      <div class="p-5 text-center w-full" :class="{'right-0': button === 'SHOP SALE'}">
        <h1 class="text-4xl text-white uppercase leading-none font-black">{{h1}}</h1>
        <p class="text-sm text-white my-4">{{p}}</p>
        <nuxt-link
          :to="{name: 'shop'}"
          class="text-sm text-center bg-white w-full block py-3 tracking-wide hover:shadow-outline focus:shadow-outline"
        >{{button}}</nuxt-link>
      </div>
    </div>
    <div
      class="hidden section h-screen relative sm:block"
      :style="'background: url(' + requireImageSM + ') center/cover no-repeat'"
    >
      <div
        class="p-5 text-center w-full sm:flex sm:flex-col absolute sm:w-2/5 sm:h-full sm:justify-center md:p-12 lg:px-20"
        :class="{'right-0': button === 'SHOP SALE'}"
      >
        <h1
          class="text-4xl text-white uppercase leading-none font-black sm:text-left sm:text-lg md:text-xl lg:text-3xl"
        >{{h1}}</h1>
        <p class="text-sm text-white my-4 sm:text-left sm:leading-none xl:text-lg">{{p}}</p>
        <nuxt-link
          :to="{name: 'shop'}"
          class="text-sm cursor-pointer text-center bg-white w-full block py-3 tracking-wide hover:shadow-outline focus:shadow-outline"
        >{{button}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PreFooterSection',
  props: ['image', 'h1', 'p', 'button'],
  data() {
    return {}
  },
  computed: {
    requireImage() {
      return require(`~/assets/img/${this.image}.jpg`)
    },
    requireImageSM() {
      return require(`~/assets/img/${this.image}_SM.jpg`)
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .pre-footer-section .section {
    height: 270px !important;
  }
}
@media (min-width: 1100px) {
  .pre-footer-section .section {
    height: 350px !important;
  }
}
@media (min-width: 1280px) {
  .pre-footer-section .section {
    height: 500px !important;
  }
}
</style>