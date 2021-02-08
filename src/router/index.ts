import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import QuizzzNite from '@/games/QuizzzNite.vue';
import PianoShooter from '@/games/PianoShooter.vue';
import Privacy from '@/views/Privacy.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: PianoShooter
  },
  {
    path: '/quizzz-nite',
    name: 'quizzz-nite',
    component: QuizzzNite
  },
  {
    path: '/piano-shooter',
    name: 'piano-shooter',
    component: PianoShooter
  },
  {
    path: '/quizzz-nite/privacy',
    name: 'quizzz-nite-privacy',
    component: Privacy,
    props: { game: 'quizzz' }
  },
  {
    path: '/piano/privacy',
    name: 'piano-privacy',
    component: Privacy,
    props: { game: 'piano' }
  },
  {
    path: '/quizzz-nite/contact',
    name: 'quizzz-nite-contact',
    component: Contact,
    props: { game: 'contact' }
  },
  {
    path: '/piano/contact',
    name: 'piano-contact',
    component: Contact,
    props: { game: 'piano' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
