import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '../views/event/EventLayout.vue'
import EventDetails from '../views/event/EventDetails.vue'
import EventRegister from '../views/event/EventRegister.vue'
import EventEdit from '../views/event/EventEdit.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import NProgress from 'nprogress'
import Eventservics from '@/services/Eventservics'
import GlobalStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta: { requireAuth: true },
  },
  {
    path: '/about',
    redirect: { name: 'About' },
  },
  {
    path: '/event/:id',
    name: 'EventLayout',

    component: EventLayout,
    beforeEnter: to => {
      ///per-route guards

      return Eventservics.getEvent(to.params.id)
        .then(response => {
          GlobalStore.event = response.data
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            return { name: '404resource', params: { resource: 'event' } }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },

    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/:catch(.*)',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from) => {
  ///global route guards
  NProgress.start()
  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    GlobalStore.flashMessage = 'sorry ,you are not authorized'

    setTimeout(() => {
      GlobalStore.flashMessage = ''
    }, 3000)

    if (from.href) {
      return false
    } else {
      return { path: '/' }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
