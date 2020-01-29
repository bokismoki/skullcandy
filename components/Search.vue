<template>
  <div class="search relative">
    <div class="container mx-auto">
      <div class="flex justify-end py-2">
        <div class="flex items-center">
          <label class="text-white text-sm mr-2 cursor-pointer" for="search">Search:</label>
          <input
            class="px-1 placeholder-black text-sm"
            type="search"
            id="search"
            v-model="searchValue"
            @input="search"
          />
        </div>
      </div>
      <div v-if="searchValue" class="my-10 hidden lg:block">
        <div v-for="item in searchItems" :key="item._id">
          <SearchItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchItem from '~/components/SearchItem'

export default {
  name: 'Search',
  components: {
    SearchItem
  },
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters(['searchItems'])
  },
  methods: {
    search() {
      if (this.searchValue.trim()) {
        this.$store.dispatch(
          'filterSearchItems',
          this.searchValue.toLowerCase().trim()
        )
      }
    }
  }
}
</script>

<style scoped>
</style>