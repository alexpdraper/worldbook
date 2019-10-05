import Item from './item'

export default class Weapon extends Item {
  constructor (name, cost, weight, damage, properties, category) {
    super(name, cost, weight, category)
    this.damage = damage.replace(' ', ' ')
    this.properties = properties.replace('range ', 'range ')
  }
}
