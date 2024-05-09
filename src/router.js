import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './view/HomePage.vue'
import MoviePage from './view/movies/MoviePage.vue'
import ActorPage from './view/actors/actorsIndex.vue'
import actorDetails from './view/actors/actorDetails.vue'

// Define routes
const routes = [
  { path: '/', component: HomePage },
  { path:'/MoviePage/:id', component:MoviePage},
  { path:'/actors', component:ActorPage},
  { path:'/actors/:id', component:actorDetails},

]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router // Export the router instance
