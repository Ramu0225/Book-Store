<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../../store/cart";
import {
	BooksInCartContract,
	discountApplicable,
	totalBill,
	discountDate,
} from "./cartModel";
import { computed } from "vue";
import OrderList from "../../components/OrderList.vue";
const cart = useCartStore();

const { booksInCart } = storeToRefs(cart);
const isDiscountApplicable = discountApplicable(discountDate);
const total = computed(() => {
	return totalBill(booksInCart.value, discountDate);
});
</script>
<template>
	<div class="checkout-page">
		<div>
			<h2>Ordered Items</h2>
		</div>
		<ul>
			<li class="checkout-item" v-for="book in booksInCart" :key="book.id">
				<OrderList
					:book="book"
					:addToCart="cart.addBookToCart"
					:removeBookFromCart="cart.removeBookFromCart"
					:removeAllBooksFromCart="cart.removeAllBooksFromCart"
				/>
			</li>
		</ul>
		<div class="discount" v-if="isDiscountApplicable">Discount:20%</div>
		<div class="total">TOTAL: {{ total }}</div>
	</div>
</template>
<style scoped lang="scss">
.checkout-page {
	width: 55%;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	margin: 10px auto 0;
	.checkout-item {
		background-color: rgb(125 178 180);
		padding: 5px;
		border-radius: 5px;
		position: relative;
		margin-bottom: 5px;
	}
}
</style>
