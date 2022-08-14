<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../../store/cart";
import {
	discountApplicable,
	totalBill,
	discountDate,
	discountPercent,
} from "./cartModel";
import { computed, onMounted } from "vue";
import OrderList from "../../components/OrderList.vue";
const cart = useCartStore();

const { booksInCart } = storeToRefs(cart);
const isDiscountApplicable = discountApplicable(discountDate);
const total = computed(() => {
	return totalBill(booksInCart.value, discountDate);
});
onMounted(() => {
	if (!cart.booksInCart.length) {
		cart.getCartFromLocalStorage();
	}
});
</script>
<template>
	<div class="checkout-page">
		<div v-if="!booksInCart.length">No Books in cart</div>
		<div v-else>
			<div>
				<h2>Ordered Items</h2>
			</div>
			<div>
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
				<div class="discount" v-if="isDiscountApplicable">
					DISCOUNT: {{ discountPercent }}%
				</div>
				<div class="total">TOTAL: £{{ total }}</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.checkout-page {
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-align-items: center;
	align-items: center;
	margin: 30px auto 0;
	padding: 10px;
	width: 80%;
	.checkout-item {
		background-color: rgb(125 178 180);
		padding: 5px;
		border-radius: 5px;
		position: relative;
		margin-bottom: 5px;
	}
	.total,
	.discount {
		text-align: right;
		width: 100%;
		font-weight: 900;
		padding-top: 20px;
	}
	.discount {
		font-weight: 400;
		font-size: 12px;
	}
}
</style>
