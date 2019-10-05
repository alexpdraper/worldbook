import Item from './item'

export default class Armour extends Item {
  constructor (name, cost, weight, ac, strength, stealth, category) {
    super(name, cost, weight, category)
    this.ac = ac
    this.strength = strength
    this.stealth = stealth
  }
}
