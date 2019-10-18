<template>
  <div id="app">
    <div class="background">
      <main-layout>
        <template #sidebar>
          <nav class="menu is-small">
            <h2 class="menu-label heading">Felvand</h2>
            <menu-list
              :items="menuItems"
              class="is-light"
            />
          </nav>
        </template>

        <router-view />
      </main-layout>
    </div>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout'
import MenuList from './components/MenuList'
import menuItems from './data/menu'

export default {
  name: 'App',

  components: {
    MainLayout,
    MenuList
  },

  data () {
    return {
      menuItems
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  width: 1440px
  max-width: 100%

.menu
  font-size: 1rem
  @media (min-width: 768px)
    font-size: 0.85rem
  @media (min-width: 992px)
    font-size: 0.75rem

.menu-label
  color: #b0b0b0
  font-size: 0.75em
  letter-spacing: 0.1em
  text-transform: uppercase
  margin: 0
  padding: 0
  &:not(:first-child)
    margin-top: 1em
  &:not(:last-child)
    margin-bottom: 1em
</style>
