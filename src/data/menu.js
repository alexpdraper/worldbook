export default [
  {
    to: { name: 'Home' },
    label: 'Home'
  },
  {
    to: { name: 'Locations' },
    label: 'Locations',
    children: [
      { to: { name: 'Location', params: { location: 'marinville' } }, label: 'Marinville' }
      // { to: { name: 'Location', params: { location: 'queensland' } }, label: 'Queensland' },
      // { to: { name: 'Location', params: { location: 'sweeping-wilds' } }, label: 'Sweeping Wilds' }
    ]
  },
  {
    to: { name: 'Characters' },
    label: 'Characters',
    children: [
      { to: { name: 'Character', params: { id: 'jubilant' } }, label: 'Jubilant' },
      { to: { name: 'Character', params: { id: 'robyn' } }, label: 'Robyn' },
      { to: { name: 'Character', params: { id: 'winchester' } }, label: 'Winchester' },
      { to: { name: 'Character', params: { id: 'wizard' } }, label: 'Wizard' },
      { to: { name: 'Character', params: { id: 'ernst' } }, label: 'Ernst Worman' }
    ]
  },
  {
    to: { name: 'Items' },
    label: 'Items',
    children: [
      { to: { name: 'ItemCategory', params: { category: 'armour' } }, label: 'Armour' },
      { to: { name: 'ItemCategory', params: { category: 'weapons' } }, label: 'Weapons' },
      { to: { name: 'ItemCategory', params: { category: 'adventuring-gear' } }, label: 'Adventuring Gear' }
    ]
  }
]
