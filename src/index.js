import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import IntrospectionPage from './components/IntrospectionPage.vue';

const routes = [
	{ path: '/', component: HomePage },
	{
		path: '/introspektion',
		component: IntrospectionPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
