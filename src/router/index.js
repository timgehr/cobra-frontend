import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepView from '../views/StepView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/scoping-and-planning',
    name: 'scoping-planning',
    component: StepView,
    props: {cycleName: "Scoping & Planning"}
  },
  {
    path: '/solution-design',
    name: 'solution-design',
    component: StepView,
    props: {cycleName: "Solution Design"}
  },
  {
    path: '/configure-and-build',
    name: 'configure-and-build',
    component: StepView,
    props: {cycleName: "Config & Build"}
  },
  {
    path: '/testing-and-validation',
    name: 'testing-and-validation',
    component: StepView,
    props: {cycleName: "Testing & Validation"}
  },
  {
    path: '/deploy',
    name: 'deploy',
    component: StepView,
    props: {cycleName: "Deploy"}
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
