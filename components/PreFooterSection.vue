<template>
  <section>
    <div class="h-screen" :style="'background: url(' + requireImage + ') center/cover no-repeat'">
      <div class="p-5 text-center">
        <h1 class="text-4xl text-white uppercase leading-none font-black">{{h1}}</h1>
        <p class="text-sm text-white my-4">{{p}}</p>
        <a class="text-sm bg-white w-full block py-3 tracking-wide" href="#">{{button}}</a>
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
      return require(`~/assets/img/${this.image}`)
    }
  }
}
</script>

<style scoped>
</style>