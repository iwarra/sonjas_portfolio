import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import NewsPage from './views/NewsPage.vue';
import IntrospektionPage from './views/IntrospektionPage.vue';
import BlogPost from './views/BlogPost.vue';

const routes = [
	{ path: '/', component: HomePage },
	{
		path: '/introspektion',
		component: IntrospektionPage,
	},
	{ path: '/om', component: AboutPage },
	{ path: '/nyheter', component: NewsPage },
	{ path: '/nyheter/:title', component: BlogPost },
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
