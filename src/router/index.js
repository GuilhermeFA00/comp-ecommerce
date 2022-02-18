import { createRouter, createWebHistory } from "vue-router";
import aprHome from '../views/apr_home.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';

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
