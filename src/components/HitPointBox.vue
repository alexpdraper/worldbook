<template>
  <div class="box">
    <h3 class="heading">
      Hit points ({{ cmpCurrent }}/{{ cmpMax }})
      <template v-if="cmpTemp">
        <template v-if="cmpTemp > 0">+</template>{{ cmpTemp }}
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
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label
            :for="currentHpInputId"
            class="label"
          >
            Current HP
          </label>
        </div>
        <div class="field-body">
          <div class="field">
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
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label
            :for="maxHpInputId"
            class="label"
          >
            Max HP
          </label>
        </div>
        <div class="field-body">
          <div class="field">
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
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label
            :for="tempHpInputId"
            class="label"
          >
            Temp. HP
          </label>
        </div>
        <div class="field-body">
          <div class="field">
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
  border: 1px solid #fff
  z-index: 10
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
</style>
