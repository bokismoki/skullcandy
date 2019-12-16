<template>
  <div class="home">
    <main>
      <Hero />
      <ProductsCarousel />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import ProductsCarousel from '~/components/ProductsCarousel'

export default {
  name: 'home',
  components: {
    Hero,
    ProductsCarousel
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
