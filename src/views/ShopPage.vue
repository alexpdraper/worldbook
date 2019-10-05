<template>
  <div class="shop-page">
    <div v-if="found === false">
      <h2 class="title">You’ve become lost</h2>
      <p class="subtitle">
        The shop you are looking for doesn’t exist!
      </p>
    </div>
    <div
      v-else-if="found === true"
      class="wrapper"
    >
      <div class="main-column">
        <h2 class="title">{{ name }}</h2>
        <p
          v-if="tagline"
          class="subtitle"
        >
          {{ tagline }}
        </p>

        <div
          v-for="category in categories"
          :key="category.name"
          class="box"
        >
          <h3 class="heading">{{ category.name }}</h3>
          <table class="table is-fullwidth is-narrow is-borderless is-small">
            <thead>
              <tr>
                <th>Item</th>
                <th style="text-align: center">Quantity</th>
                <th style="text-align: right">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in category.items"
                :key="`${category.name}-${item.name}-${item.isHeading ? 'heading' : 'item'}`"
              >
                <template v-if="item.isHeading">
                  <th
                    colspan="3"
                    style="background-color: #dbdbdb">
                    <span class="heading" style="margin: 0; line-height: 1">{{ item.name }}</span>
                  </th>
                </template>
                <template v-else>
                  <td>{{ item.name }}</td>
                  <td style="text-align: center">{{ item.quantity }}</td>
                  <td style="text-align: right; font-variant-numeric: lining-nums">{{ item.cost }}</td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <div class="sidebar-column"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopPage',

  data () {
    return {
      name: 'Shop',
      tagline: '',
      categories: [],
      found: null
    }
  },

  async created () {
    return this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    async fetchData () {
      try {
        const { default: data } = await import(`@/data/shops/${this.$route.params.id.toLowerCase()}`)
        this.name = data.name
        this.tagline = data.tagline
        this.categories = data.categories
        this.found = true
      } catch (e) {
        this.found = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
