import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import verMasView from '@/views/verMasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      breadcrumb: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      breadcrumb:'Acerca de'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    meta: {
      breadcrumb: 'Contacto'
    }
  },{
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path:'/store',
    name:'store',
    component: () => import(/* webpackChunkName: "store" */ '../views/StoreView.vue'),
    meta:{
      breadcrumb: 'Tienda'
    },
    children: [
      {path:'/store/:id', name:'VerMas',component: verMasView, props:true }
    ]
  },
  {
    path:'/:pathMatch(.*)*',
    name:'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
