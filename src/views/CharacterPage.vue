<template>
  <section class="character-page">
    <div v-if="found === false">
      <h2 class="title">A case of mistaken identities</h2>
      <p class="subtitle">
        The person you are looking for isn’t here
      </p>
    </div>

    <div
      v-else-if="found === true"
      class="wrapper"
    >
      <div class="main-column">
        <header class="header">
          <h2 class="title">{{ name }}</h2>
          <p class="subtitle">{{ headline }}</p>
          <p class="bio">
            {{ bio }}
          </p>
        </header>

        <hit-point-box
          :max-hp.sync="hitPoints.max"
          :current-hp.sync="hitPoints.current"
          :temp-hp.sync="hitPoints.temp"
        />

        <div class="box">
          <h3 class="heading">Stats</h3>
          <div class="tags">
            <span class="tag">
              Level: <strong>{{ level }}</strong>
            </span>
            <span class="tag">
              AC: <strong>{{ ac }}</strong>
            </span>
            <span class="tag">
              Speed: <strong>{{ speed }}</strong>
            </span>
          </div>
        </div>

        <div class="box">
          <h3 class="heading">Ability scores</h3>
          <table class="table is-fullwidth has-split-columns is-narrow is-borderless">
            <tbody>
              <tr
                v-for="field in abilityScoreFields"
                :key="field.title"
              >
                <th>{{ field.title }}</th>
                <td>
                  <div class="ability-score">
                    <span>{{ field.score }}</span>
                    <span class="ability-modifier">{{ field.modifier }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="sidebar-column">
        <div
          v-if="imgUrl"
          style="margin-bottom: 1.5rem"
        >
          <div class="image">
            <img :src="imgUrl">
          </div>
        </div>

        <div class="box">
          <h3 class="heading">Profile</h3>
          <table class="table is-fullwidth has-split-columns is-narrow is-borderless">
            <tbody>
              <tr v-if="alignment">
                <th>Alignment</th>
                <td>{{ alignment }}</td>
              </tr>
              <tr>
                <th>Race</th>
                <td>{{ race }}</td>
              </tr>
              <tr>
                <th>Class</th>
                <td>{{ characterClass }}</td>
              </tr>
              <tr v-if="deity">
                <th>Deity</th>
                <td>{{ deity }}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{{ gender }}</td>
              </tr>
              <tr v-if="age">
                <th>Age</th>
                <td>{{ age }}</td>
              </tr>
              <tr v-if="height">
                <th>Height</th>
                <td>{{ height }}</td>
              </tr>
              <tr v-if="weight">
                <th>Weight</th>
                <td>{{ weight }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="box">
          <h3 class="heading">
            Skills
          </h3>
          <div class="tags">
            <!-- eslint-disable-next-line -->
            <button
              v-for="{ skill, ability, modifier } in skills"
              class="button tag"
              @click="rollD20(modifier)"
            >
              {{ skill }}
              <span style="opacity: 0.7; margin: 0 0.25em">
                ({{ ability }})
              </span>
              {{ modifier }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HitPointBox from '@/components/HitPointBox'

const alignments = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
]

const skills = [
  ['Acrobatics', 'dexterity', 'acrobatics'],
  ['Animal handling', 'wisdom', 'animalHandling'],
  ['Arcana', 'intelligence', 'arcana'],
  ['Athletics', 'strength', 'athletics'],
  ['Deception', 'charisma', 'deception'],
  ['History', 'intelligence', 'history'],
  ['Insight', 'wisdom', 'insight'],
  ['Intimidation', 'charisma', 'intimidation'],
  ['Investigation', 'intelligence', 'investigation'],
  ['Medicine', 'wisdom', 'medicine'],
  ['Nature', 'intelligence', 'nature'],
  ['Perception', 'wisdom', 'perception'],
  ['Performance', 'charisma', 'performance'],
  ['Persuasion', 'charisma', 'persuasion'],
  ['Religion', 'intelligence', 'religion'],
  ['Sleight of hand', 'dexterity', 'sleightOfHand'],
  ['Stealth', 'dexterity', 'stealth'],
  ['Survival', 'wisdom', 'survival']
].sort((a, b) => {
  if (a[0] > b[0]) return 1
  if (b[0] > a[0]) return -1
  if (a[1] > b[1]) return 1
  if (b[1] > a[1]) return -1
  return 0
})

export default {
  name: 'CharacterPage',

  components: {
    HitPointBox
  },

  data () {
    return {
      found: null,
      name: 'Anonymous',
      bio: '…',
      alignment: alignments[Math.floor(Math.random() * alignments.length)],
      race: 'Human',
      characterClass: 'Classless',
      deity: '',
      gender: '',
      age: Math.floor(Math.random() * 80) + 10,
      height: '',
      weight: '',
      imgUrl: '',
      hitPoints: {
        current: 0,
        max: 0,
        temp: 0
      },
      abilityScores: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      },
      skillProficiencies: {}
    }
  },

  computed: {
    headline () {
      return `${this.race} ${this.characterClass}`
    },
    abilityScoreFields () {
      return [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma'
      ].map(prop => {
        const title = prop[0].toUpperCase() + prop.slice(1)
        const score = this.abilityScores[prop]
        let modifier = Math.floor((score - 10) / 2)
        if (modifier >= 0) modifier = `+${modifier}`

        return { title, score, modifier }
      })
    },
    abilityModifiers () {
      return [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma'
      ].reduce((result, prop) => {
        const score = this.abilityScores[prop] || 10
        result[prop] = Math.floor((score - 10) / 2)
        return result
      }, {})
    },
    proficiencyBonus () {
      if (!this.level) return 2
      return Math.floor((this.level - 1) * 0.25) + 2
    },
    skills () {
      return skills.map(([skill, ability, key]) => {
        let proficiencyLevel = this.skillProficiencies[key] || 0
        let modifier = this.abilityModifiers[ability]
        modifier += proficiencyLevel * this.proficiencyBonus
        if (modifier >= 0) modifier = '+' + modifier

        return {
          skill,
          modifier,
          ability: ability.slice(0, 3)
        }
      })
    }
  },

  async created () {
    return this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    async fetchData () {
      try {
        const { default: data } = await import(`@/data/characters/${this.$route.params.id.toLowerCase()}`)
        this.name = data.name
        this.bio = data.bio
        this.alignment = data.alignment
        this.race = data.race
        this.characterClass = data.characterClass
        this.deity = data.deity
        this.gender = data.gender
        this.age = data.age
        this.height = data.height
        this.weight = data.weight
        this.imgUrl = data.imgUrl
        this.abilityScores = data.abilityScores || {}
        this.skillProficiencies = data.skillProficiencies || {}
        let hitPoints = data.hitPoints || 10
        this.hitPoints.current = hitPoints
        this.hitPoints.max = hitPoints
        this.hitPoints.temp = 0

        this.ac = data.ac
        this.level = data.level
        this.speed = data.speed

        this.found = true
      } catch (e) {
        this.found = false
      }
    },
    rollD20 (modifier) {
      const result = Math.floor(Math.random() * 20) + 1
      const parsedModifier = parseInt(modifier || 0, 10)

      let str
      if (result === 20) str = 'Nat 20, baby!'
      else if (result === 1) str = 'Ouch…that’s a 1.'
      else str = `Rolled ${result}!`

      str += '\n\n'
      str += `${result}${modifier} = ${result + parsedModifier}`

      alert(str)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  margin-bottom: 1.5rem
  .subtitle
    margin-bottom: 0.5rem
  .bio
    font-style: italic

.ability-score
  display: flex
  justify-content: flex-end
  align-items: center

.ability-modifier
  line-height: 1
  font-size: 0.7em
  padding: 3px 6px
  margin-left: 0.5em
  background-color: #2a63a4
  color: #fff
  border-radius: 290486px
</style>
