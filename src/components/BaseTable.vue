<template>
  <table class="table">
    <thead>
      <tr>
        <th
          v-for="field in filteredFields"
          :key="`th-${id}-${field.id}`"
        >
          {{ field.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="row in rows"
        :key="`tr-${id}-${row.id}`"
      >
        <template v-if="row.isHeading">
          <th
            :colspan="cols"
            style="background-color: #dbdbdb"
          >
            <span class="heading" style="margin: 0; line-height: 1">{{ row.title }}</span>
          </th>
        </template>
        <template v-else>
          <td
            v-for="item in row.items"
            :key="`td-${id}-${item.id}`"
          >
            {{ item.value }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import uniqueId from '@/util/unique-id'

export default {
  name: 'BaseTable',

  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    groupBy: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      id: uniqueId()
    }
  },

  computed: {
    filteredFields () {
      return this.fields.filter(({ field }) => !this.groupBy || this.groupBy !== field)
    },
    cols () {
      return this.filteredFields.length
    },
    rows () {
      let rows = []
      let categories = []

      this.items.forEach(item => {
        let itemGroup = this.groupBy && item[this.groupBy]
        let parsedItem = {
          id: item.id,
          isHeading: false,
          items: this.filteredFields.map(({ field, id }) => ({
            id: `${item.id}-${id}`,
            value: item[field]
          }))
        }

        if (itemGroup) {
          let category = categories.find(({ name }) => name === itemGroup)
          if (!category) {
            category = { name: itemGroup, items: [] }
            categories.push(category)
          }

          category.items.push(parsedItem)
        } else {
          rows.push(parsedItem)
        }
      })

      categories.forEach(category => {
        if (category.name) {
          rows.push({
            id: uniqueId(),
            isHeading: true,
            title: category.name
          })
        }
        rows = rows.concat(category.items)
      })
      return rows
    }
  }
}
</script>
