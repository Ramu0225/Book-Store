<script setup lang="ts">
import { defineProps } from "vue";
import { BookContract } from "@/views/books/booksModel";
interface Props {
	book: BookContract;
	isBookSoldOut: boolean;
	addToCart: (book: BookContract) => void;
}
const props = defineProps<Props>();
</script>
<template>
	<img v-bind:src="book.image_url" />
	<p>
		{{ props.book.title }}
	</p>
	<p>{{ props.book.price }}</p>
	<div v-if="props.isBookSoldOut">
		<button type="button" disabled>Sold out</button>
	</div>
	<div v-else>
		<button type="button" @click="props.addToCart(book)">Add To Cart</button>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
