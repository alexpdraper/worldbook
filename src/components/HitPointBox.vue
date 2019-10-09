<template>
  <div class="box">
    <h3 class="heading">
      Hit points ({{ cmpCurrent }}/{{ cmpMax }})
      <template v-if="cmpTemp">
        +{{ cmpTemp }}
      </template>
    </h3>

    <div class="buttons has-addons hp-buttons">
      <button
        class="button"
        style="width: 2em"
        @click="cmpCurrent = cmpCurrent - 1"
      >
        -
      </button>
      <button
        style="flex-grow: 1"
        class="button"
        @click="editing = !editing"
      >
        <div class="hp-bar">
          <div
            :style="currentHpStyle"
            class="hp-bar-current"
          />
        </div>
      </button>
      <button
        class="button"
        style="width: 2em"
        @click="cmpCurrent = cmpCurrent + 1"
      >
        +
      </button>
    </div>

    <form
      v-if="editing"
      @submit.prevent="editing = false"
    >
      <div class="field">
        <label
          :for="currentHpInputId"
          class="label"
        >
          Current HP
        </label>
        <div class="control">
          <input
            v-model.number="cmpCurrent"
            :id="currentHpInputId"
            :max="currentMaxHp"
            class="input"
            type="number"
            step="1"
            min="0"
          >
        </div>
      </div>
      <div class="field">
        <label
          :for="maxHpInputId"
          class="label"
        >
          Max HP
        </label>
        <div class="control">
          <input
            v-model.number="cmpMax"
            :id="maxHpInputId"
            class="input"
            type="number"
            step="1"
            min="0"
          >
        </div>
      </div>
      <div
        class="field"
        style="margin-bottom: 1rem"
      >
        <label
          :for="tempHpInputId"
          class="label"
        >
          Temporary HP
        </label>
        <div class="control">
          <input
            v-model.number="cmpTemp"
            :id="tempHpInputId"
            class="input"
            type="number"
            step="1"
          >
        </div>
      </div>

      <div>
        <button
          class="button is-primary is-fullwidth"
          type="submit"
        >
          Done
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import uniqueId from '@/util/unique-id'

// const clamp = (value, min, max) =>
//   Math.max(Math.min(parseInt(value, 10), max), min)

export default {
  name: 'HitPointBox',

  props: {
    maxHp: {
      type: Number,
      default: 18
    },
    currentHp: {
      type: Number,
      default: 15
    },
    tempHp: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      id: uniqueId(),
      editing: false
    }
  },

  watch: {
    currentMaxHp (newMax) {
      if (newMax < this.cmpCurrent) {
        this.cmpCurrent = newMax
      }
    }
  },

  computed: {
    currentHpInputId () {
      return this.id + '-current-hp'
    },
    maxHpInputId () {
      return this.id + '-max-hp'
    },
    tempHpInputId () {
      return this.id + '-temp-hp'
    },
    currentHpScale () {
      if (this.cmpCurrent <= 0) return 0
      return this.currentHp / Math.max(this.currentMaxHp, 1)
    },
    currentHpStyle () {
      return {
        transform: `scaleX(${this.currentHpScale})`
      }
    },
    currentMaxHp () {
      return this.cmpMax + this.cmpTemp
    },
    cmpCurrent: {
      get () {
        return this.currentHp
      },
      set (value) {
        let parsed = parseInt(value || 0, 10)
        parsed = Math.max(parsed, 0)
        parsed = Math.min(parsed, this.currentMaxHp)
        this.$emit('update:currentHp', parsed)
      }
    },
    cmpMax: {
      get () {
        return Math.max(this.maxHp, 1)
      },
      set (value) {
        let parsed = Math.max(parseInt(value || 0, 10), 1)
        this.$emit('update:maxHp', parsed)
      }
    },
    cmpTemp: {
      get () {
        return this.tempHp || 0
      },
      set (value) {
        let parsed = parseInt(value || 0, 10)
        this.$emit('update:tempHp', parsed)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hp-bar
  background-color: #fff
  position: relative
  border-radius: 290486px
  overflow: hidden
  width: 100%
  height: 1.5rem
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  .hp-bar-current
    transition: transform 0.3s ease
    transform-origin: left
    background-color: gold
    position: absolute
    top: 0px
    right: 0px
    bottom: 0px
    left: 0px

.hp-buttons:not(:last-child)
  margin-bottom: 0.5rem

.field
  display: flex
  align-items: center
  margin-bottom: 0.25rem
  .label
    color: #363636
    display: block
    font-size: 1rem
    flex: 0 0 35%
    max-width: 0 0 35%
  .input
    border: 1px solid #dbdbdb
    border-radius: 4px
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1)
    width: 100%
    max-width: 100%
    padding-top: calc(0.375em - 1px)
    padding-bottom: calc(0.375em - 1px)
    text-indent: calc(0.625em - 1px)
    font-size: 1rem
    height: 2.25em
    line-height: 1.5
    margin: 0
    position: relative
    background-color: white
    color: #363636
    &:active,
    &.is-active,
    &:focus,
    &.is-focused
      outline: none
    &[disabled]
      cursor: not-allowed
    &:hover,
    &.is-hovered
      border-color: #b5b5b5
      color: #363636
    &:focus,
    &.is-focused
      border-color: #3273dc
      color: #363636
    &:focus:not(:active),
    &.is-focused:not(:active)
      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25)
    &:active,
    &.is-active
      border-color: #4a4a4a
      color: #363636
    &.is-rounded
      border-radius: 290486px

  .control
    box-sizing: border-box
    clear: both
    font-size: 1rem
    position: relative
    text-align: left
    flex-basis: 0
    flex-grow: 1
</style>
