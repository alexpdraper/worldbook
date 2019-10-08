<template>
  <ul :class="rootClass">
    <li
      v-for="item in menuItems"
      :key="item.key"
    >
      <router-link
        class="link"
        :to="item.to"
        exact
      >
        {{ item.label }}
      </router-link>
      <menu-list
        v-if="item.children && item.children.length"
        :items="item.children"
        is-nested
      />
    </li>
  </ul>
</template>

<script>
import uniqueId from '@/util/unique-id'

export default {
  name: 'MenuList',

  props: {
    items: {
      type: Array,
      default: () => []
    },
    isNested: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    rootClass () {
      let classes = ['menu-list']
      if (this.isNested) classes.push('is-nested')
      return classes.join(' ')
    },
    menuItems () {
      return this.items.map(item => {
        if (item.key) return item
        return { ...item, key: uniqueId() }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-list
  line-height: 1.25
  list-style: none
  margin: 0
  padding: 0
  .link
    border-radius: 2px
    color: #4a4a4a
    display: block
    padding: 0.5em 0.75em
    text-decoration: none
    &:hover
      background-color: whitesmoke
      color: #363636
    &.is-active
      background-color: #2a63a4
      color: #fff
  &.is-nested
    border-left: 1px solid rgba(0, 0, 0, 0.2)
    margin: 0.75em
    padding-left: 0.75em
    display: none
    @media (min-width: 768px)
      display: block
</style>
