<template>
  <div class="home">
    <main>
      <Hero />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'home',
  components: {
    Hero
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
