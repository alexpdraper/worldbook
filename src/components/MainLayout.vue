<template functional>
  <div class="main-layout">
    <aside class="sidebar">
      <div class="container">
        <slot name="sidebar" />
      </div>
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
  max-width: 500px
  margin-right: auto
  margin-left: auto
  @media (min-width: 768px)
    max-width: none

.sidebar,
.content
  width: 100%
  padding: 1.5rem
  @media (min-width: 768px)
    padding: 2rem 1.5rem

.sidebar
  position: relative
  background: top left repeat url('/backgrounds/stardust.png')
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  @media (min-width: 768px)
    max-width: 220px
    flex: 0 0 220px
    padding-right: 1rem
    padding-left: 1rem
  @media (min-width: 1240px)
    max-width: 260px
    flex: 0 0 260px

.content
  @media (min-width: 768px)
    overflow: hidden
    max-width: 100%
    flex-basis: 0
    flex-grow: 1
    min-height: 100vh
.content > .container
  @media (min-width: 768px)
    max-width: 500px
  @media (min-width: 992px)
    max-width: 1000px
</style>
