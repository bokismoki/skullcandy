<template>
  <section class="hero" style="margin-top: 68px;">
    <div class="h-screen" :style="'background: url(' + images[0] + ') center/cover no-repeat'">
      <div class="p-5 text-center">
        <h1 class="text-4xl uppercase leading-none font-black">Golden deals on music feels.</h1>
        <p class="text-sm my-4">See what you can score for up to 25% off during our holiday sale.</p>
        <a
          class="text-sm text-white bg-gray-900 hover:bg-gray-800 w-full block py-3 tracking-wide"
          href="#"
        >SHOP SALE</a>
      </div>
    </div>
    <div class="cursor-pointer" style="height: 375px;" :style="'background: url(' + images[1]+ ') center/cover no-repeat'"></div>
    <div class="cursor-pointer" style="height: 375px;" :style="'background: url(' + images[2]+ ') center/cover no-repeat'"></div>
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
</style>