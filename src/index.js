import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import IntrospectionPage from './views/IntrospectionPage.vue';

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
