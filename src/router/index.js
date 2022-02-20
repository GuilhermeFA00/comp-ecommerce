import { createRouter, createWebHistory } from "vue-router";
import aprHome from '../views/apr_home.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import basePage from '../views/base_page';

const routes = [
	{
		path: "/",
		component: aprHome,
		meta: {
			title: "FA Welcome"
		}
	},
	{
		path: "/login",
		component: login,
		meta: {
			title: "Join-FA"
		}
	},
	{
		path: "/register",
		component: register,
		meta: {
			title: "Create now!"
		}
	},
	{
		path: "/app",
		component: basePage,
		meta: {
			title: "App Fa-ecommmerce"
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	next();
});

export default router;
