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

        <div class="box">
          <h3 class="heading">
            Skills
          </h3>
          <div class="tags">
            <!-- eslint-disable-next-line -->
            <span
              v-for="tag in skills"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
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
      </div>
    </div>
  </section>
</template>

<script>
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
  ['Acrobatics', 'dex'],
  ['Animal handling', 'wis'],
  ['Arcana', 'int'],
  ['Athletics', 'str'],
  ['Deception', 'cha'],
  ['History', 'int'],
  ['Insight', 'wis'],
  ['Intimidation', 'cha'],
  ['Investigation', 'int'],
  ['Medicine', 'wis'],
  ['Nature', 'int'],
  ['Perception', 'wis'],
  ['Performance', 'cha'],
  ['Persuasion', 'cha'],
  ['Religion', 'int'],
  ['Sleight of hand', 'dex'],
  ['Stealth', 'dex'],
  ['Survival', 'wis']
].sort((a, b) => {
  if (a[1] > b[1]) return 1
  if (b[1] > a[1]) return -1
  if (a[0] > b[0]) return 1
  if (b[0] > a[0]) return -1
  return 0
})

export default {
  name: 'CharacterPage',

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
      abilityScores: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      }
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
    skills () {
      return skills.map(([skill, ability]) => `${skill} (${ability})`)
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
        this.abilityScores = data.abilityScores

        this.found = true
      } catch (e) {
        this.found = false
      }
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
