<template>
  <div class="home">
    <main>
      <Hero />
      <ProductsCarousel />
      <PreFooterSection
        image="sesh_earbuds.jpg"
        h1="No wires. No worries."
        p="Check out Sesh, our easy-to-use, completely wireless earbuds."
        button="SHOP NOW"
      />
      <PreFooterSection
        image="holiday.jpg"
        h1="Holiday hook ups."
        p="Scoop the ones you've been waiting to see on sale. Order by 12/19 to get it by 12/24."
        button="SHOP SALE"
      />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import ProductsCarousel from '~/components/ProductsCarousel'
import PreFooterSection from '~/components/PreFooterSection'

export default {
  name: 'home',
  components: {
    Hero,
    ProductsCarousel,
    PreFooterSection
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
