<template>
  <div class="home">
    <div class="wrapper">
      <div class="main-column">
        <h1 class="title">The World of Felvand</h1>
        <div class="box">
          <div class="menu">
            <menu-list :items="menuItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import menuItems from '@/data/menu'
const topMenu = menuItems
  .map(item => ({ to: item.to, label: item.label }))
  .filter(item => item.to.name !== 'Home')

export default {
  name: 'Home',

  components: {
    MenuList
  },

  data () {
    return {
      menuItems: topMenu
    }
  }
}
</script>
