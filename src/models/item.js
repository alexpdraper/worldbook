import uniqueId from '@/util/unique-id'

export default class Item {
  constructor (name, cost, weight, category) {
    this.id = uniqueId()
    this.name = name
    this.cost = cost
    this.weight = weight
    this.category = category
  }
}
