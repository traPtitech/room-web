import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import PathStorage from '@/utils/PathStorage'

const Dashboard = () => import('@/pages/Dashboard.vue')
const EventSearch = () => import('@/pages/EventSearch.vue')
const EventDetail = () => import('@/pages/EventDetail.vue')
const EventNew = () => import('@/pages/EventNew.vue')
const GroupNew = () => import('@/pages/GroupNew.vue')
const NotFound = () => import('@/pages/NotFound.vue')
const WIP = () => import('@/pages/WIP.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard,
      meta: { headerTitle: 'Dashboard' },
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: WIP,
      meta: { headerTitle: 'Rooms' },
    },
    {
      path: '/groups',
      name: 'Groups',
      component: WIP,
      meta: { headerTitle: 'Groups' },
    },
    {
      path: '/groups/new',
      name: 'GroupNew',
      component: GroupNew,
      meta: { headerTitle: 'Create new group' },
    },
    {
      path: '/groups/:id',
      name: 'GroupDescription',
      component: WIP,
      meta: { headerTitle: 'Group detail' },
    },
    {
      path: '/groups/:id/edit',
      name: 'GroupEdit',
      component: WIP,
      meta: { headerTitle: 'Edit group detail' },
    },
    {
      path: '/events',
      name: 'Events',
      component: EventSearch,
      meta: { headerTitle: 'Events' },
    },
    {
      path: '/events/new',
      name: 'EventNew',
      component: EventNew,
      meta: { headerTitle: 'Create new event' },
    },
    {
      path: '/events/:id',
      name: 'EventDetail',
      component: EventDetail,
      meta: { headerTitle: 'Event detail' },
    },
    {
      path: '/callback',
      name: 'Callback',
      redirect: PathStorage.getSavedPath() || '/',
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { headerTitle: '' },
    },
  ],
})

router.beforeEach(async (_to, _from, next) => {
  if (!store.state.me) {
    store.dispatch.getMe()
  }
  next()
})

export default router
