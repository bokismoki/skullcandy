<template>
  <section class="hero" style="margin-top: 68px;">
    <div class="sm:flex">
      <div
        class="hero-big h-screen sm:w-2/3 sm:relative"
        :style="'background: url(' + images[0] + ') center/cover no-repeat'"
      >
        <div class="p-5 text-center sm:absolute sm:bottom-0 sm:left-0 sm:w-1/2 md:p-12">
          <h1
            class="text-4xl uppercase leading-none font-black sm:text-lg sm:text-left md:text-xl"
          >Golden deals on music feels.</h1>
          <p
            class="text-sm my-4 sm:text-left sm:leading-none"
          >See what you can score for up to 25% off during our holiday sale.</p>
          <a
            class="text-sm text-white bg-gray-900 hover:bg-gray-800 w-full block py-3 tracking-wide"
            href="#"
          >SHOP SALE</a>
        </div>
      </div>
      <div class="sm:flex sm:flex-col sm:w-1/3">
        <div
          class="hero-small cursor-pointer"
          style="height: 375px;"
          :style="'background: url(' + images[1]+ ') center/cover no-repeat'"
        ></div>
        <div
          class="hero-small cursor-pointer"
          style="height: 375px;"
          :style="'background: url(' + images[2]+ ') center/cover no-repeat'"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      images: [
        require('~/assets/img/gold_wrapper_gif.gif'),
        require('~/assets/img/indy_earbuds.jpg'),
        require('~/assets/img/gift.jpg')
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .hero .hero-big {
    height: auto !important;
    background-position: right bottom !important;
  }
  .hero .hero-small {
    height: 230px !important;
  }
}
</style>