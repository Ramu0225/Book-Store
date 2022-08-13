<script setup lang="ts">
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { BookContract } from "./booksModel";
import BookCard from "../../components/BookCard.vue";
import { useBooksStore } from "../../store/books";
import Footer from "../../components/common/Footer.vue";

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
	<div class="books-page">
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
	</div>
	<Footer />
</template>
<style scoped lang="scss">
.books-page {
	width: 100%;
	margin: 50px 0;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	li {
		flex-grow: 1;
	}
}
</style>
