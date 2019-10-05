<template functional>
  <div class="main-layout">
    <aside class="sidebar">
      <div class="container">
        <slot name="sidebar" />
      </div>
      <div class="divider" />
    </aside>

    <div class="content">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  functional: true
}
</script>

<style lang="stylus" scoped>
.main-layout
  display: flex
  width: 100%
  flex-wrap: wrap
  @media (min-width: 768px)
    flex-wrap: nowrap

.container
  width: 100%
  max-width: 600px
  margin-right: auto
  margin-left: auto
  @media (min-width: 768px)
    max-width: none

.sidebar,
.content
  width: 100%
  padding: 1.5rem
  @media (min-width: 768px)
    padding: 3rem 2rem

.sidebar
  position: relative
  background-color: #efefef
  border-bottom: 1px solid #dbdbdb
  @media (min-width: 768px)
    background-color: transparent
    border-bottom: 0
    max-width: 260px
    flex: 0 0 260px
  @media (min-width: 1024px)
    max-width: 300px
    flex: 0 0 300px

.divider
  display: none
  @media (min-width: 768px)
    display: block
    position: absolute
    right: -2px
    top: 0
    bottom: 0
    width: 1px
    border-right: 4px dotted #dbdbdb

.content
  @media (min-width: 768px)
    overflow: hidden
    max-width: 100%
    flex-basis: 0
    flex-grow: 1
</style>
