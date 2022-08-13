import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BooksView from "../views/books/BooksView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: BooksView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
