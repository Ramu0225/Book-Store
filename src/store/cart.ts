import { defineStore } from "pinia";
import { BookContract } from "@/views/books/booksModel";
import { BooksInCartContract } from "../views/cart/cartModel";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
	const booksInCart = ref<Array<BooksInCartContract>>([]);
	const findBookById = (id: number) => {
		return booksInCart.value.find((book) => book.id === id);
	};
	const addBookToCart = (book: BookContract) => {
		const bookInCart = findBookById(book.id);
		if (bookInCart && book.stock_quantity === bookInCart.numberOfBooksOrdered) {
			return;
		}
		if (bookInCart) {
			bookInCart.numberOfBooksOrdered++;
		} else {
			booksInCart.value = [
				...booksInCart.value,
				{ ...book, numberOfBooksOrdered: 1 },
			];
		}
		addCartToLocalStorage(booksInCart.value);
	};

	const removeBookFromCart = (book: BooksInCartContract) => {
		if (book.numberOfBooksOrdered === 1) {
			return;
		}
		if (book.numberOfBooksOrdered) {
			const bookInCart = findBookById(book.id);
			if (bookInCart) {
				bookInCart.numberOfBooksOrdered--;
			}
		} else {
			booksInCart.value = booksInCart.value.filter((b) => b.id !== book.id);
		}
		addCartToLocalStorage(booksInCart.value);
	};

	const removeAllBooksFromCart = (book: BooksInCartContract) => {
		booksInCart.value = booksInCart.value.filter((b) => b.id !== book.id);
		addCartToLocalStorage(booksInCart.value);
	};

	const addCartToLocalStorage = (
		cartItems: Array<BooksInCartContract> | undefined
	) => {
		localStorage.setItem("booksCart", JSON.stringify(cartItems));
	};

	const getCartFromLocalStorage = () => {
		try {
			booksInCart.value = JSON.parse(localStorage.getItem("booksCart") || "");
		} catch {
			localStorage.removeItem("booksCart");
			booksInCart.value = [];
		}
	};
	return {
		booksInCart,
		addBookToCart,
		removeBookFromCart,
		removeAllBooksFromCart,
		findBookById,
		getCartFromLocalStorage,
	};
});
