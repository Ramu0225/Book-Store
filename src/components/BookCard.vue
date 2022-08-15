<template>
	<div class="bookCard">
		<p>
			{{ props.book.title }}
		</p>
		<img v-bind:src="book.image_url" />
		<div class="bookCard-items">
			<p>Stock: {{ props.stockQuantity }}</p>
			<p>£{{ props.book.price }}</p>
		</div>
		<div v-if="props.isBookSoldOut">
			<button class="bookCard-btn" type="button" disabled>Out of stock</button>
		</div>
		<div v-else>
			<button class="bookCard-btn" type="button" @click="props.addToCart(book)">
				Add To Cart
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BookContract } from "@/views/books/booksModel";
import { defineProps } from "vue";
interface Props {
	book: BookContract;
	isBookSoldOut: boolean;
	addToCart: (book: BookContract) => void;
	stockQuantity: number;
}
const props = defineProps<Props>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$card-color: rgb(125, 178, 180);
.bookCard {
	width: 200px;
	height: 320px;
	margin: 10px auto;
	border-radius: 5px;
	background-color: $card-color;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 2s;
	color: white;
	animation: fade 1s;
	animation-duration: 1s;
	.bookCard-items {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.bookCard-btn {
		width: 200px;
		height: 30px;
		background-color: #31b73a;
		border-radius: 0 0 5px 5px;
		border: none;
		cursor: pointer;
		&:hover {
			background-color: $card-color;
			color: white;
		}
		&:disabled {
			pointer-events: none;
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
}
</style>
