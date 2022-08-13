<script setup lang="ts">
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { BookContract } from "./booksModel";
import BookCard from "../../components/BookCard.vue";
import { useBooksStore } from "../../store/books";

const store = useBooksStore();

const { books } = storeToRefs(store);
onMounted(() => {
	store.fetchBooks();
});
const addToCart = (book: BookContract) => {};
const isProductSoldOut = (book: BookContract) => {
	return !book.stock_quantity;
};
const isLoading = computed(() => {
	return store.loading && !store.books.length;
});
</script>
<template>
	<div v-if="isLoading">
		<p>loader</p>
	</div>
	<div v-if="store.error">
		<p>please try again</p>
	</div>
	<div v-else>
		<ul>
			<li v-for="book in books" :key="book.id">
				<BookCard
					:book="book"
					:addToCart="addToCart"
					:isBookSoldOut="isProductSoldOut(book)"
				/>
			</li>
		</ul>
	</div>
</template>
<style scoped lang="scss">
ul {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style: none;
	flex-wrap: wrap;
	margin: 0;
}
p {
	margin-top: 50px;
}
li {
	flex-grow: 1;
	width: 33%;
}
</style>
