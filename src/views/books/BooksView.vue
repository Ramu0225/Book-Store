<script setup lang="ts">
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { BookContract } from "./booksModel";
import BookCard from "../../components/BookCard.vue";
import { useBooksStore } from "../../store/books";
import Footer from "../../components/common/Footer.vue";
import { useCartStore } from "../../store/cart";

const store = useBooksStore();
const cart = useCartStore();

const { books } = storeToRefs(store);
onMounted(() => {
	store.fetchBooks();
});
const addToCart = (book: BookContract) => {
	cart.addBookToCart(book);
};
const isProductSoldOut = (book: BookContract) => {
	const bookInCart = cart.findBookById(book.id);
	if (!bookInCart) {
		return !book.stock_quantity;
	}
	return (
		!book.stock_quantity ||
		bookInCart.numberOfBooksOrdered === book.stock_quantity
	);
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
		display: grid;
		@media (min-width: 320px) {
			grid-template-columns: repeat(1, 1fr);
		}
		@media (min-width: 481px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (min-width: 800px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (min-width: 960px) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media (min-width: 1205px) {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	li {
		flex-grow: 1;
	}
}
</style>
