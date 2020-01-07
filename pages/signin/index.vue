<template>
  <div class="container mx-auto sign-in" style="margin-top: 68px;">
    <div class="py-10 px-5 md:flex md:justify-between md:items-start md:px-10 md:py-16 lg:py-24">
      <div class="md:w-1/2 md:mr-10">
        <h1 class="text-center font-black text-4xl md:text-left md:text-5xl">SIGN IN</h1>
        <form @submit.prevent="signin">
          <div>
            <label class="inline-block text-sm cursor-pointer" for="email">Email Address:</label>
            <input
              class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
              type="email"
              id="email"
              v-model="user.email"
            />
          </div>
          <div class="mt-2 lg:mt-5">
            <label class="inline-block text-sm cursor-pointer" for="password">Password:</label>
            <input
              class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
              type="password"
              id="password"
              v-model="user.password"
            />
          </div>
          <div class="mt-2 flex items-center lg:mt-5">
            <input type="checkbox" id="newsletter" />
            <label class="text-sm ml-2 cursor-pointer" for="newsletter">Sign up for Newsletter</label>
          </div>
          <div class="flex flex-col mt-5 sm:flex-row sm:items-center sm:justify-center">
            <button
              class="bg-black text-white text-sm tracking-wider py-3 mt-3 hover:bg-gray-900 sm:px-10 sm:mr-5"
              type="submit"
            >SIGN IN</button>
            <a class="text-center text-sm mt-3 hover:opacity-75" href="#">Forgot your password?</a>
          </div>
        </form>
      </div>
      <div class="p-10 mt-10 bg-gray-400 md:w-1/2 md:mt-0">
        <h2 class="font-black">NEW CUSTOMER?</h2>
        <p class="mt-5 text-sm">Create an account with us and you'll be able to:</p>
        <ul class="list-disc">
          <li class="text-sm ml-10 mt-1 opacity-75">Check out faster</li>
          <li class="text-sm ml-10 mt-1 opacity-75">Save multiple shipping addresses</li>
          <li class="text-sm ml-10 mt-1 opacity-75">Access your order history</li>
          <li class="text-sm ml-10 mt-1 opacity-75">Track new orders</li>
        </ul>
        <nuxt-link :to="{name: 'signup'}">
          <button
            class="bg-black px-10 text-white text-sm tracking-wider py-3 mt-3 hover:bg-gray-900"
            type="submit"
          >CREATE ACCOUNT</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  middleware: ['isAuth'],
  head: {
    title: 'Sign in'
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signin() {
      if (this.user.email.trim() && this.user.password.trim()) {
        await this.$axios
          .post('/user/signin', this.user, {
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(async response => {
            const { msg, err } = response.data
            if (msg) {
              await this.$auth.loginWith('local', {
                data: this.user
              })

              await this.$axios
                .get(`/cart/get/${this.$auth.user.user_id}`)
                .then(response => {
                  const { err, items } = response.data
                  if (!err) {
                    if (items) {
                      this.$store.dispatch('initCartItems', items)
                    } else {
                      this.$store.dispatch('initCartItems', [])
                    }
                  } else {
                    this.$notify({
                      group: 'notification',
                      title: 'Error caught:',
                      type: 'error',
                      text: err
                    })
                  }
                })
                .catch(err => {
                  console.error(err)
                  this.$notify({
                    group: 'notification',
                    title: 'Error caught:',
                    type: 'error',
                    text: "Couldn't load the cart"
                  })
                })

              this.$router.push({ name: 'index' })
            } else {
              this.$notify({
                group: 'notification',
                title: 'Error caught:',
                type: 'error',
                text: err
              })
            }
          })
          .catch(err => {
            console.error(err)
            this.$notify({
              group: 'notification',
              title: 'Error caught:',
              type: 'error',
              text: "Couldn't sign in"
            })
          })
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .sign-in {
    margin-top: 61px !important;
  }
}
</style>