import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BooksView from "../views/books/BooksView.vue";
import CartView from "../views/cart/CartView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: BooksView,
	},
	{
		path: "/cart",
		name: "cart",
		component: CartView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
