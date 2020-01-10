<template>
  <div>
    <notifications group="notification" />
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
  outline: none !important;
}
body {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
