import Vue from 'vue';
import Router from 'vue-router';
import Details from './components/Details.vue'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'landing',
      component: () => import('./views/Landing.vue'),
    },
    {
      path: '/welcome',
      name: 'landing',
      component: () => import('./views/Landing.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue'),
    },
    {
      path: '/github',
      beforeEnter() {
        // directed towards my personal github
        location.href = 'https://github.com/singhp1992'
      }
    },
    {
      path: '/api',
      beforeEnter() {
        // directed towards api documentation
        location.href = 'https://www.openbrewerydb.org/#documentation'
      }
    },
    {
      path: '/home/:id',
      component: Details,
    }
  ],
});