import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import QuizzzNite from '@/games/QuizzzNite.vue';
import Privacy from '@/views/Privacy.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: QuizzzNite
  },
  {
    path: '/quizzz-nite',
    name: 'quizzz-nite',
    component: QuizzzNite
  },
  {
    path: '/quizzz-nite/privacy',
    name: 'quizzz-nite-privacy',
    component: Privacy,
    props: { game: 'quizzz' }
  },
  {
    path: '/quizzz-nite/contact',
    name: 'quizzz-nite-contact',
    component: Contact,
    props: { game: 'contact' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
