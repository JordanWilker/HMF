import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/year/:id/grants',
    name: 'GrantsByYear',
    component: loadPage('GrantsByYearPage'),
    beforeEnter: authGuard
  },
  {
    path: '/grant/:id',
    name: 'GrantInfo',
    component: loadPage('GrantInfoPage'),
    beforeEnter: authGuard
  },
  {
    path: '/cycle/:id/grants',
    name: 'GrantsByCycle',
    component: loadPage('GrantsByCyclePage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
