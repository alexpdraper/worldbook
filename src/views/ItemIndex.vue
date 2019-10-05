<template>
  <div class="item-index">
    <div class="wrapper">
      <div class="main-column">
        <h2 class="title">Items</h2>
        <p class="subtitle">Items found throughout Felvand</p>

        <div class="box">
          <h3 class="heading">Equipment</h3>
          <div class="menu">
            <menu-list :items="equipmentMenu" />
          </div>
        </div>

        <div class="box">
          <h3 class="heading">Adventuring</h3>
          <div class="menu">
            <menu-list :items="gearMenu" />
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
      equipmentMenu: [
        { to: { name: 'ItemCategory', params: { category: 'armour' } }, label: 'Armour' },
        { to: { name: 'ItemCategory', params: { category: 'weapons' } }, label: 'Weapons' }
      ],
      gearMenu: [
        { to: { name: 'ItemCategory', params: { category: 'adventuring-gear' } }, label: 'Adventuring Gear' }
      ]
    }
  }
}
</script>
