<template>
  <section class="products-carousel">
    <div
      class="h-screen cursor-pointer relative px-5 sm:hidden"
      :style="'background: url(' + images[currentSlide] + ') center/cover no-repeat'"
    >
      <img
        class="absolute w-8 cursor-pointer"
        style="top: 50%; transform: translate(-50%);"
        src="~/assets/img/chevron_left.svg"
        alt="Chevron Left"
        @click="switchSlide('-')"
      />
      <img
        class="absolute w-8 cursor-pointer right-0"
        style="top: 50%; transform: translate(-50%);"
        src="~/assets/img/chevron_right.svg"
        alt="Chevron Right"
        @click="switchSlide('+')"
      />
      <div
        class="absolute flex items-center justify-center"
        style="left: 50%; bottom: 25px; transform: translate(-50%);"
      >
        <span
          class="w-3 h-3 mx-2 bg-white rounded-full"
          :class="{'bg-gray-800': currentSlide === 0}"
        ></span>
        <span
          class="w-3 h-3 mx-2 bg-white rounded-full"
          :class="{'bg-gray-800': currentSlide === 1}"
        ></span>
        <span
          class="w-3 h-3 mx-2 bg-white rounded-full"
          :class="{'bg-gray-800': currentSlide === 2}"
        ></span>
      </div>
    </div>
    <div class="products hidden sm:flex" style="background-color: #1d1d1d;">
      <div
        class="w-1/3 cursor-pointer"
        :style="'background: url(' + images[0] + ') center/contain no-repeat'"
      ></div>
      <div
        class="w-1/3 cursor-pointer"
        :style="'background: url(' + images[1] + ') center/contain no-repeat'"
      ></div>
      <div
        class="w-1/3 cursor-pointer"
        :style="'background: url(' + images[2] + ') center/contain no-repeat'"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsCarousel',
  data() {
    return {
      currentSlide: 0,
      images: [
        require('~/assets/img/crusher_headphones.jpg'),
        require('~/assets/img/push_earbuds.jpg'),
        require('~/assets/img/venue_headphones.jpg')
      ]
    }
  },
  methods: {
    switchSlide(direction) {
      if (direction === '-') {
        if (this.currentSlide === 0) {
          return (this.currentSlide = this.images.length - 1)
        }
        this.currentSlide--
      } else {
        if (this.currentSlide === 2) {
          return (this.currentSlide = 0)
        }
        this.currentSlide++
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .products-carousel .products {
    height: 300px !important;
  }
}
@media (min-width: 1100px) {
  .products-carousel .products {
    height: 400px !important;
  }
}
@media (min-width: 1280px) {
  .products-carousel .products {
    height: 500px !important;
  }
}
</style>