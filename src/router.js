import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/characters',
      name: 'Characters',
      component: () => import(/* webpackChunkName: "characters" */ './views/CharacterIndex')
    },
    {
      path: '/characters/:id',
      name: 'Character',
      component: () => import(/* webpackChunkName: "character" */ './views/CharacterPage')
    },
    {
      path: '/locations',
      name: 'Locations',
      component: () => import(/* webpackChunkName: "locations" */ './views/LocationIndex')
    },
    {
      path: '/locations/:location',
      name: 'Location',
      component: () => import(/* webpackChunkName: "location" */ './views/LocationPage.vue')
    },
    {
      path: '/shops/:id',
      name: 'Shop',
      component: () => import(/* webpackChunkName: "shop" */ './views/ShopPage.vue')
    },
    {
      path: '/items',
      name: 'Items',
      component: () => import(/* webpackChunkName: "items" */ './views/ItemIndex.vue')
    },
    {
      path: '/items/:category',
      name: 'ItemCategory',
      component: () => import(/* webpackChunkName: "item" */ './views/ItemCategory.vue')
    }
  ]
})
