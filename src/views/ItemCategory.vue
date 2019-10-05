<template>
  <div class="item-category">
    <div v-if="found === false">
      <h2 class="title">That’s not a thing</h2>
      <p class="subtitle">
        Nope. It doesn’t exist.
      </p>
    </div>
    <template v-else-if="found === true">
      <h2 class="title">{{ name }}</h2>

      <div class="box">
        <div class="table-container">
          <base-table
            :fields="fields"
            :items="items"
            :group-by="groupBy"
            class="is-fullwidth is-small is-narrow"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable'

export default {
  name: 'ItemCategory',

  components: {
    BaseTable
  },

  data () {
    return {
      name: '',
      fields: [],
      items: [],
      groupBy: '',
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
        const { default: data } = await import(`@/data/items/${this.$route.params.category.toLowerCase()}`)
        this.name = data.name
        this.fields = data.fields
        this.items = data.items
        this.groupBy = data.groupBy

        this.found = true
      } catch (e) {
        this.found = false
      }
    }
  }
}
</script>
