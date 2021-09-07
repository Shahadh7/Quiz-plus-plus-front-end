import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/SignIn.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/quiz/:slug',
    name: 'QuizAttempt',
    component: () => import(/* webpackChunkName: "quizattempt" */ '../views/QuizAttempt.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      // store.dispatch('checkKey').then(r => {
      //   if (r.data.message === "valid") {
          //next()
      //   }
      next()
      //})
      return
    }
    next('/sign-in')
  } else {
    next()
  }
})

export default router
