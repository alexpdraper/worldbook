import uniqueId from '@/util/unique-id'
import Weapon from '@/models/weapon'

export default {
  name: 'Weapons',
  fields: [
    { label: 'Name', field: 'name', id: uniqueId() },
    { label: 'Cost', field: 'cost', id: uniqueId() },
    { label: 'Damage', field: 'damage', id: uniqueId() },
    { label: 'Weight', field: 'weight', id: uniqueId() },
    { label: 'Properties', field: 'properties', id: uniqueId() },
    { label: 'Category', field: 'category', id: uniqueId() }
  ],
  groupBy: 'category',
  items: [
    // Simple Melee Weapons
    new Weapon('Club', 0.1, 2, '1d4 bludgeoning', 'Light', 'Simple Melee Weapons'),
    new Weapon('Dagger', 2, 2, '1d4 piercing', 'Finesse, light, thrown (range 20/60)', 'Simple Melee Weapons'),
    new Weapon('Greatclub', 0.2, 10, '1d8 bludgeoning', 'Two-handed', 'Simple Melee Weapons'),
    new Weapon('Handaxe', 5, 2, '1d6 slashing', 'Light, thrown (range 20/60)', 'Simple Melee Weapons'),
    new Weapon('Javelin', 0.5, 2, '1d6 piercing', 'Thrown range(30/120)', 'Simple Melee Weapons'),
    new Weapon('Light hammer', 2, 2, '1d4 bludgeoning', 'Light, thrown (range 20/60)', 'Simple Melee Weapons'),
    new Weapon('Mace', 5, 4, '1d6 bludgeoning', '—', 'Simple Melee Weapons'),
    new Weapon('Quarterstaff', 0.2, 4, '1d6 bludgeoning', 'Versatile (1d8)', 'Simple Melee Weapons'),
    new Weapon('Sickle', 1, 2, '1d4 slashing', 'Light', 'Simple Melee Weapons'),
    new Weapon('Spear', 1, 3, '1d6 piercing', 'Thrown (range 20/60), versatile (1d8)', 'Simple Melee Weapons'),
    // Simple Ranged Weapons
    new Weapon('Crossbow, light', 25, 5, '1d8 piercing', 'Ammunition (range 80/320), loading, two-handed', 'Simple Ranged Weapons'),
    new Weapon('Dart', 0.05, 0.25, '1d4 piercing', 'Finesse, thrown (range 20/60)', 'Simple Ranged Weapons'),
    new Weapon('Shortbow', 25, 2, '1d6 piercing', 'Ammunition (range 80/320), two-handed', 'Simple Ranged Weapons'),
    new Weapon('Sling', 0.1, 0, '1d4 bludgeoning', 'Ammunition (range 30/120)', 'Simple Ranged Weapons'),
    // Martial Melee Weapons
    new Weapon('Battleaxe', 10, 4, '1d8 slashing', 'Versatile (1d10)', 'Martial Melee Weapons'),
    new Weapon('Flail', 10, 2, '1d8 bludgeoning', '—', 'Martial Melee Weapons'),
    new Weapon('Glaive', 20, 6, '1d10 slashing', 'Heavy, reach, two-handed', 'Martial Melee Weapons'),
    new Weapon('Greataxe', 30, 7, '1d12 slashing', 'Heavy, two-handed', 'Martial Melee Weapons'),
    new Weapon('Greatsword', 50, 6, '2d6 slashing', 'Heavy, two-handed', 'Martial Melee Weapons'),
    new Weapon('Halberd', 20, 6, '1d10 slashing', 'Heavy, reach, two-handed', 'Martial Melee Weapons'),
    new Weapon('Lance', 10, 6, '1d12 piercing', 'Reach, special', 'Martial Melee Weapons'),
    new Weapon('Longsword', 15, 3, '1d8 slashing', 'Versatile (1d10)', 'Martial Melee Weapons'),
    new Weapon('Maul', 10, 10, '2d6 bludgeoning', 'Heavy, two-handed', 'Martial Melee Weapons'),
    new Weapon('Morningstar', 15, 4, '1d8 piercing', '—', 'Martial Melee Weapons'),
    new Weapon('Pike', 5, 18, '1d10 piercing', 'Heavy, reach, two-handed', 'Martial Melee Weapons'),
    new Weapon('Rapier', 25, 2, '1d8 piercing', 'Finesse', 'Martial Melee Weapons'),
    new Weapon('Scimitar', 25, 3, '1d6 slashing', 'Finesse, light', 'Martial Melee Weapons'),
    new Weapon('Shortsword', 10, 2, '1d6 piercing', 'Finesse, light', 'Martial Melee Weapons'),
    new Weapon('Trident', 5, 4, '1d6 piercing', 'Thrown (range 20/60), versatile (1d8)', 'Martial Melee Weapons'),
    new Weapon('War pick', 5, 2, '1d8 piercing', '—', 'Martial Melee Weapons'),
    new Weapon('Warhammer', 15, 2, '1d8 bludgeoning', 'Versatile (1d10)', 'Martial Melee Weapons'),
    new Weapon('Whip', 2, 3, '1d4 slashing', 'Finesse, reach', 'Martial Melee Weapons'),
    // Martial Ranged Weapons
    new Weapon('Blowgun', 10, 1, '1 piercing', 'Ammunition (range 25/100), loading', 'Martial Ranged Weapons'),
    new Weapon('Crossbow, hand', 75, 3, '1d6 piercing', 'Ammunition (range 30/120), light, loading', 'Martial Ranged Weapons'),
    new Weapon('Crossbow, heavy', 50, 18, '1d10 piercing', 'Ammunition (range 100/400), heavy, loading, two-handed', 'Martial Ranged Weapons'),
    new Weapon('Longbow', 50, 2, '1d8 piercing', 'Ammunition (range 150/600), heavy, two-handed', 'Martial Ranged Weapons'),
    new Weapon('Net', 1, 3, '—', 'Special, thrown (range 5/15)', 'Martial Ranged Weapons')
  ]
}
