import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
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

export default router
