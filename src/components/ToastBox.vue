<template>
  <transition-group
    name="list"
    tag="div"
    class="toast-box"
  >
    <div
      v-for="(toast, index) in toasts"
      :key="toast.id"
      class="toast"
      @click="toasts.splice(index, 1)"
    >
      <div class="toast-message">{{ toast.message }}</div>
    </div>
  </transition-group>
</template>

<script>
import uniqueId from '@/util/unique-id'

export default {
  name: 'ToastBox',

  data () {
    return {
      toasts: []
    }
  },

  methods: {
    toast (message) {
      const item = {
        id: uniqueId(),
        message
      }

      this.toasts.unshift(item)

      window.setTimeout(() => {
        const index = this.toasts.indexOf(item)
        if (index === -1) return
        this.toasts.splice(index, 1)
      }, 5000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.toast-box
  position: fixed
  top: 10px
  right: 10px
  width: 250px
  max-width: 100%
  z-index: 10
  .toast
    border-radius: 6px
    background: top left repeat url('/backgrounds/tree-bark.png')
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
      1px 3px 8px 2px rgba(10, 10, 10, 0.15)
    border: 5px solid #fff
    .toast-message
      padding: 1rem
      white-space: pre-line
      background-color: rgba(255, 255, 255, 0.3)
    &:not(:last-child)
      margin-bottom: 0.5rem
    &.list-enter-active,
    &.list-leave-active
      transition: all 0.3s
    &.list-enter,
    &.list-leave-to
      opacity: 0
      transform: translateY(30px)
</style>
