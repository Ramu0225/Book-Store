<template>
	<div class="books-page">
		<div v-if="isLoading">
			<AppPreloader />
		</div>
		<div v-else-if="store.error">
			<Error />
		</div>
		<div v-else>
			<ul>
				<li v-for="book in books" :key="book.id">
					<BookCard
						:book="book"
						:addToCart="addToCart"
						:isBookSoldOut="isProductSoldOut(book)"
						:stockQuantity="stockQuantity(book)"
					/>
				</li>
			</ul>
		</div>
	</div>
	<Footer />
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { BookContract } from "./booksModel";
import BookCard from "../../components/BookCard.vue";
import { useBooksStore } from "../../store/books";
import AppPreloader from "../../components/common/AppPreloader.vue";
import Error from "../../components/common/AppError.vue";
import { useCartStore } from "../../store/cart";
import { storeToRefs } from "pinia";
import Footer from "../../components/common/AppFooter.vue";

const store = useBooksStore();
const cart = useCartStore();

const { books } = storeToRefs(store);
onMounted(() => {
	cart.getCartFromLocalStorage();
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
const stockQuantity = (book: BookContract) => {
	const bookInCart = cart.findBookById(book.id);
	if (!bookInCart) {
		return book.stock_quantity;
	}
	return book.stock_quantity - bookInCart.numberOfBooksOrdered;
};
const isLoading = computed(() => {
	return store.loading && !store.books.length;
});
</script>
<style scoped lang="scss">
.books-page {
	width: 100%;
	margin: 50px 0;
	min-height: 100vh;
	ul {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
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
