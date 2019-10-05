export default {
  name: 'Adventuring Shop',
  categories: [
    {
      name: 'Armour',
      items: [
        // Light Armour
        { name: 'Light Armour', isHeading: true },
        { name: 'Padded', quantity: 1, cost: 5 },
        { name: 'Leather', quantity: 1, cost: 10 },
        { name: 'Studded leather', quantity: 1, cost: 45 },
        // Medium Armour
        { name: 'Medium Armour', isHeading: true },
        { name: 'Hide', quantity: 1, cost: 10 },
        { name: 'Chain shirt', quantity: 1, cost: 50 },
        { name: 'Scale mail', quantity: 1, cost: 50 },
        { name: 'Breastplate', quantity: 1, cost: 400 },
        { name: 'Half plate', quantity: 1, cost: 750 },
        // Heavy Armour
        { name: 'Heavy Armour', isHeading: true },
        { name: 'Ring mail', quantity: 1, cost: 30 },
        { name: 'Chain mail', quantity: 1, cost: 75 },
        { name: 'Splint', quantity: 1, cost: 200 },
        { name: 'Plate', quantity: 1, cost: 1500 },
        // Shield
        { name: 'Shield', isHeading: true },
        { name: 'Shield', quantity: 1, cost: 10 }
      ].map(item => {
        if (item.isHeading) return item
        return {
          ...item,
          quantity: Math.floor(Math.random() * 6)
        }
      })
    }
  ]
}
