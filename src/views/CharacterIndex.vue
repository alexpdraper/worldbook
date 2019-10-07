<template>
  <div class="character-index">
    <div class="wrapper">
      <div class="main-column">
        <h2 class="title">Characters</h2>
        <p class="subtitle">The fine folks of Felvand</p>

        <div class="box">
          <h3 class="heading">Intrepid Heroes</h3>
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
import menuData from '@/data/menu'

const menuItems = (() => {
  let topMenu = menuData.find(menu => menu.label === 'Characters')
  if (topMenu && topMenu.children) return topMenu.children
  return []
})()

export default {
  name: 'CharacterIndex',

  components: {
    MenuList
  },

  data () {
    return {
      menuItems
    }
  }
}
</script>
