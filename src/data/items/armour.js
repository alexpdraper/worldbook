import uniqueId from '@/util/unique-id'
import Armour from '@/models/armour'

export default {
  name: 'Armour',
  fields: [
    { label: 'Armour', field: 'name', id: uniqueId() },
    { label: 'Cost', field: 'cost', id: uniqueId() },
    { label: 'AC', field: 'ac', id: uniqueId() },
    { label: 'Strength', field: 'strength', id: uniqueId() },
    { label: 'Stealth', field: 'stealth', id: uniqueId() },
    { label: 'Weight', field: 'weight', id: uniqueId() },
    { label: 'Category', field: 'category', id: uniqueId() }
  ],
  groupBy: 'category',
  items: [
    new Armour('Padded', 5, 8, '11 + Dex modifier', '—', 'Disadvantage', 'Light Armour'),
    new Armour('Leather', 10, 10, '11 + Dex modifier', '—', '—', 'Light Armour'),
    new Armour('Studded leather', 45, 13, '12 + Dex modifier', '—', 'Disadvantage', 'Light Armour'),
    new Armour('Hide', 10, 12, '12 + Dex modifier (max 2)', '—', '—', 'Medium Armour'),
    new Armour('Chain shirt', 50, 20, '13 + Dex modifier (max 2)', '—', '—', 'Medium Armour'),
    new Armour('Scale mail', 50, 45, '14 + Dex modifier (max 2)', '—', 'Disadvantage', 'Medium Armour'),
    new Armour('Breastplate', 400, 20, '14 + Dex modifier (max 2)', '—', '—', 'Medium Armour'),
    new Armour('Half plate', 750, 40, '15 + Dex modifier (max 2)', '—', 'Disadvantage', 'Medium Armour'),
    new Armour('Ring mail', 30, 40, '14', '—', 'Disadvantage', 'Heavy Armour'),
    new Armour('Chain mail', 75, 55, '16', '—', 'Disadvantage', 'Heavy Armour'),
    new Armour('Splint', 200, 60, '17', '—', 'Disadvantage', 'Heavy Armour'),
    new Armour('Plate', 1500, 65, '18', '—', 'Disadvantage', 'Heavy Armour'),
    new Armour('Shield', 10, 6, '+2', '—', '—', 'Shield')
  ]
}
