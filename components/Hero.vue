<template>
  <section class="hero" style="margin-top: 68px;">
    <div class="sm:flex">
      <div
        class="hero-big h-screen sm:w-2/3 sm:hidden"
        :style="'background: url(' + images[0] + ') center/cover no-repeat'"
      >
        <div class="p-5">
          <h1
            class="text-4xl text-center uppercase leading-none font-black"
          >Golden deals on music feels.</h1>
          <p
            class="text-sm text-center my-4"
          >See what you can score for up to 25% off during our holiday sale.</p>
          <nuxt-link
            class="text-sm cursor-pointer text-center text-white bg-black w-full block py-3 tracking-wide hover:shadow-outline focus:shadow-outline"
            :to="{name: 'shop'}"
          >SHOP SALE</nuxt-link>
        </div>
      </div>
      <div
        class="hidden hero-big h-screen sm:w-2/3 sm:relative sm:block"
        :style="'background: url(' + images[1] + ') center/cover no-repeat'"
      >
        <div
          class="p-5 sm:absolute sm:bottom-0 sm:left-0 sm:w-1/2 md:w-2/3 md:pl-12 md:pb-12 lg:pl-20 lg:pb-20"
        >
          <h1
            class="text-4xl text-center uppercase leading-none font-black sm:text-lg sm:text-left md:text-xl lg:text-3xl"
          >Golden deals on music feels.</h1>
          <p
            class="text-sm text-center my-4 sm:text-left sm:leading-none xl:text-lg"
          >See what you can score for up to 25% off during our holiday sale.</p>
          <nuxt-link
            class="text-sm cursor-pointer text-center text-white bg-black w-full block py-3 tracking-wide hover:shadow-outline focus:shadow-outline xl:inline-block xl:w-auto xl:px-5"
            :to="{name: 'shop'}"
          >SHOP SALE</nuxt-link>
        </div>
      </div>
      <div class="sm:flex sm:flex-col sm:w-1/3">
        <nuxt-link
          :to="{name: 'shop'}"
          class="hero-small"
          style="height: 375px;"
          :style="'background: url(' + images[2]+ ') center/cover no-repeat'"
        ></nuxt-link>
        <nuxt-link
          :to="{name: 'shop'}"
          class="hero-small"
          style="height: 375px;"
          :style="'background: url(' + images[3]+ ') center/cover no-repeat'"
        ></nuxt-link>
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
        require('~/assets/img/gold_wrapper_gif_SM.gif'),
        require('~/assets/img/indy_earbuds.jpg'),
        require('~/assets/img/gift.jpg')
      ]
    }
  }
}
</script>

<style scoped>
.hero-small:hover,
.hero-small:focus {
  @apply -ml-2;
}

@media (min-width: 640px) {
  .hero .hero-big {
    @apply h-auto;
    @apply bg-right-bottom;
  }
  .hero .hero-small {
    height: 230px !important;
  }
}
@media (min-width: 1024px) {
  .hero {
    margin-top: 61px !important;
  }
  .hero .hero-small {
    height: 50vh !important;
  }
}
</style>