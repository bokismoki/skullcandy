<template>
  <div class="sign-up container mx-auto" style="margin-top: 68px;">
    <div class="py-10 px-5 sm:max-w-lg sm:mx-auto">
      <h1 class="text-center font-black text-4xl md:text-5xl">SIGN UP</h1>
      <form @submit.prevent="signup" class="mt-5">
        <p class="text-xs font-semibold">* Required</p>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="email">
            Email Address
            <span class="font-black">*</span>
          </label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="email"
            id="email"
            v-model="user.email"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="password">
            Password
            <span class="font-black">*</span>
          </label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="password"
            id="password"
            v-model="user.password"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="confirmPassword">
            Confirm Password
            <span class="font-black">*</span>
          </label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="password"
            id="confirmPassword"
            v-model="user.confirmPassword"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="country">Country</label>
          <select class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500" id="country">
            <option disabled selected>Country</option>
            <option>United States</option>
          </select>
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="firstName">First Name</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="firstName"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="lastName">Last Name</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="lastName"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="address">Address</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="address"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="companyName">Company Name</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="companyName"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="city">City</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="city"
          />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="zip">Zip Code</label>
          <input class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500" type="text" id="zip" />
        </div>
        <div class="mt-2">
          <label class="inline-block text-sm cursor-pointer" for="phone">Phone Number</label>
          <input
            class="border-2 w-full p-2 bg-gray-200 focus:border-gray-500"
            type="text"
            id="phone"
          />
        </div>
        <div class="mt-2 flex items-center">
          <input type="checkbox" id="newsletter" />
          <label class="text-sm ml-2 cursor-pointer" for="newsletter">Sign up for Newsletter</label>
        </div>
        <button
          class="bg-black text-white w-full text-sm tracking-wider py-3 mt-5 hover:shadow-outline focus:shadow-outline"
          type="submit"
        >SIGN UP</button>
      </form>
    </div>
  </div>
</template>

<script>
import { outputNotification } from '~/Utils'

export default {
  name: 'SignUp',
  middleware: ['isAuth'],
  head: {
    title: 'Sign up'
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    async signup() {
      try {
        if (
          this.user.email.trim() &&
          this.user.password.trim() &&
          this.user.password.trim() === this.user.confirmPassword.trim()
        ) {
          await this.$axios
            .post('/user/signup', this.user, {
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
                this.$router.push({ name: 'index' })
                this.$store.dispatch('clearCart')
              } else {
                outputNotification(err)
              }
            })
            .catch(err => {
              console.error(err)
              outputNotification("Couldn't register a new user")
            })
        } else {
          outputNotification('Please fill in all the required fields (*)')
        }
      } catch (err) {
        console.error(err)
        outputNotification("Couldn't register a new user")
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .sign-up {
    margin-top: 61px !important;
  }
}
</style>