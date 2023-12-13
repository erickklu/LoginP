import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import MenuPage from '../views/MenuPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: MenuPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
