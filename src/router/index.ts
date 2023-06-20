import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import QuizzzNite from '@/games/QuizzzNite.vue';
import PianoShooter from '@/games/PianoShooter.vue';
import Jumpilla from '@/games/Jumpilla.vue';
import Convergists from '@/games/Convergists.vue';
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
    path: '/jumpilla',
    name: 'jumpilla',
    component: Jumpilla
  },
  {
    path: '/convergists',
    name: 'convergists',
    component: Convergists
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
    path: '/jumpilla/privacy',
    name: 'jumpilla-privacy',
    component: Privacy,
    props: { game: 'jumpilla' }
  },
  {
    path: '/convergists/privacy',
    name: 'convergists-privacy',
    component: Privacy,
    props: { game: 'convergists' }
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
  },
  {
    path: '/jumpilla/contact',
    name: 'jumpilla-contact',
    component: Contact,
    props: { game: 'jumpilla' }
  },
  {
    path: '/convergists/contact',
    name: 'convergists-contact',
    component: Contact,
    props: { game: 'convergists' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
