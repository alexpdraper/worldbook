<template>
  <div class="location-index">
    <div class="wrapper">
      <div class="main-column">
        <h2 class="title">Locations</h2>
        <p class="subtitle">Points of interest in the world of Felvand</p>

        <div class="box">
          <div class="menu">
            <menu-list :items="menuItems" />
          </div>
        </div>
      </div>
      <!-- <div class="sidebar-column"></div> -->
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'

export default {
  name: 'LocationIndex',

  components: {
    MenuList
  },

  data () {
    return {
      menuItems: [
        { to: { name: 'Location', params: { location: 'marinville' } }, label: 'Marinville' }
      ]
    }
  }
}
</script>
