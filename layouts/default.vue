<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
