import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import IntrospectionPage from './views/IntrospectionPage.vue';
import AboutPage from './views/AboutPage.vue';
import NewsPage from './views/NewsPage.vue';

const routes = [
	{ path: '/', component: HomePage },
	{
		path: '/introspektion',
		component: IntrospectionPage,
	},
	{ path: '/om', component: AboutPage },
	{ path: '/nyheter', component: NewsPage },
];

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},
	history: createWebHistory(),
	routes,
});

export default router;
