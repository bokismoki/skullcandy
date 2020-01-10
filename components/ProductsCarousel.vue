<template>
  <section class="products-carousel">
    <nuxt-link
      :to="{name: 'shop'}"
      class="h-screen block cursor-pointer relative px-5 sm:hidden"
      :style="'background: url(' + images[currentSlide] + ') center/cover no-repeat'"
    >
      <button
        class="absolute z-40 w-8 cursor-pointer"
        style="top: 50%; transform: translate(-50%);"
        @click.prevent="switchSlide('-')"
      >
        <img src="~/assets/img/chevron_left.svg" alt="Chevron Left" />
      </button>
      <button
        class="absolute z-40 w-8 cursor-pointer right-0"
        style="top: 50%; transform: translate(-50%);"
        @click.prevent="switchSlide('+')"
      >
        <img src="~/assets/img/chevron_right.svg" alt="Chevron Right" />
      </button>
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
    </nuxt-link>
    <div class="products hidden sm:flex" style="background-color: #1d1d1d;">
      <nuxt-link
        v-for="(product, index) in 3"
        :key="index"
        class="image w-1/3 relative"
        :to="{name: 'shop'}"
      >
        <div
          class="w-full h-full absolute"
          :style="'background: url(' + hoverImages[index] + ') center/contain no-repeat'"
        >
          <img
            class="w-full h-full object-contain hover:opacity-0"
            :src="images[index]"
            style="background-color: #1d1d1d;"
            alt="Product Image"
          />
        </div>
      </nuxt-link>
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
      ],
      hoverImages: [
        require('~/assets/img/carousel_person_1.jpg'),
        require('~/assets/img/carousel_person_2.jpg'),
        require('~/assets/img/carousel_person_3.jpg')
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
.products img {
  transition: all 500ms;
}

.image:focus > div > img {
  @apply opacity-0;
}

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