import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Dog from '/src/views/Dog.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/dog/:id', 
    name: 'dog',
    component: Dog 
  }
  // will match everything and put it under `$route.params.pathMatch`
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router