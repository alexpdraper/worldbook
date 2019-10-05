<template>
  <article class="location-page">
    <div v-if="found === false">
      <h2 class="title">Uncharted territories</h2>
      <p class="subtitle">
        There’s nothing here
      </p>
    </div>

    <div
      v-else-if="found === true"
      class="wrapper"
    >
      <div class="main-column">
        <h2 class="title">{{ name }}</h2>
        <p class="subtitle">
          {{ description }}
        </p>
      </div>

      <div
        v-if="mapUrl"
        class="sidebar-column"
      >
        <div>
          <div class="image">
            <img :src="mapUrl">
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'LocationPage',

  data () {
    return {
      found: null,
      name: '',
      description: '',
      mapUrl: ''
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
        const { default: data } = await import(`@/data/locations/${this.$route.params.location.toLowerCase()}`)
        this.name = data.name
        this.description = data.description
        this.mapUrl = data.mapUrl

        this.found = true
      } catch (e) {
        this.found = false
      }
    }
  }
}
</script>
