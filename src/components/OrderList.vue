<template>
	<div class="order-list-item">
		<div class="image-container">
			<img v-bind:src="book.image_url" alt="image" />
			<div class="item-title">
				<p>{{ book.title }}</p>
				<div class="quantity">
					<span class="padding">Qty</span>
					<div class="arrow" @click="props.removeBookFromCart(book)">❮</div>
					<p class="value">{{ book.numberOfBooksOrdered }}</p>
					<div class="arrow" @click="props.addToCart(book)">❯</div>
					<div>
						<button
							type="button"
							:disabled="!book.stock_quantity"
							@click="removeAllBooksFromCart(book)"
							class="remove-button"
						>
							X
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="price">
			£{{ (book.price * book.numberOfBooksOrdered).toFixed(2) }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { BooksInCartContract } from "../views/cart/cartModel";
import { defineProps } from "vue";
interface Props {
	book: BooksInCartContract;
	addToCart: (book: BooksInCartContract) => void;
	removeBookFromCart: (book: BooksInCartContract) => void;
	removeAllBooksFromCart: (book: BooksInCartContract) => void;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
$card-color: rgb(125, 178, 180);
.order-list-item {
	width: 300px;
	z-index: -1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media (min-width: 481px) {
		width: 400px;
	}
	img {
		border-radius: 5px;
	}
	.padding {
		padding-right: 10px;
	}
	.price {
		display: flex;
		align-items: center;
		padding: 10px;
		font-weight: 700;
		font-size: medium;
	}
	.image-container {
		width: 100px;
		height: 100px;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.item-title {
		padding: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.quantity {
		display: flex;
		.arrow {
			cursor: pointer;
			color: black;
		}
		.value {
			margin: 0 10px;
		}
		.remove-button {
			cursor: pointer;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			border: none;
			background-color: rgb(0, 0, 0, 0.2);
			position: absolute;
			top: 5px;
			right: 5px;
			transition: all 0.5s;
			&:hover {
				background-color: black;
				color: snow;
			}
		}
	}
}
</style>
