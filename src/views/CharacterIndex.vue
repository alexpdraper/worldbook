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

export default {
  name: 'CharacterIndex',

  components: {
    MenuList
  },

  data () {
    return {
      menuItems: [
        { to: { name: 'Character', params: { id: 'jubilant' } }, label: 'Jubilant' },
        { to: { name: 'Character', params: { id: 'winchester' } }, label: 'Winchester' },
        { to: { name: 'Character', params: { id: 'wizard' } }, label: 'Wizard' },
        { to: { name: 'Character', params: { id: 'spring' } }, label: 'Spring' }
      ]
    }
  }
}
</script>
