import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home/index.vue'
import Dog from '/src/views/Dog/index.vue';
import NotFound from '/src/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/dog/:id', 
    name: 'dog',
    component: Dog,
  },
  { path: '/:afterUser(.*)', component: NotFound  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router