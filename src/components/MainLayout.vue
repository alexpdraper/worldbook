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
  @media (min-width: 768px)
    max-width: 260px
    flex: 0 0 260px
  @media (min-width: 1024px)
    max-width: 300px
    flex: 0 0 300px

.divider
  position: absolute
  right: 0
  bottom: 0
  width: 100%
  background-color: #fff
  border: 1px solid #2a63a4
  border-width: 1px 0
  height: 4px
  @media (min-width: 768px)
    right: 0px
    width: 4px
    height: 100%
    border-width: 0 1px

.content
  background: #fff
  @media (min-width: 768px)
    overflow: hidden
    max-width: 100%
    flex-basis: 0
    flex-grow: 1
    min-height: 100vh
.content > .container
  @media (min-width: 1240px)
    margin-right: auto
    margin-left: auto
    max-width: 940px
</style>
