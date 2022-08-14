import { BookContract, fetchBooksFromServer } from "../views/books/booksModel";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBooksStore = defineStore("books", () => {
	const books = ref<Array<BookContract>>([]);
	const loading = ref(false);
	const error = ref(false);
	const fetchBooks = async () => {
		try {
			loading.value = true;
			error.value = false;
			getBooksFromLocalStorage();
			if (books.value.length) {
				loading.value = false;
				return;
			}
			const data = await fetchBooksFromServer();
			books.value = data;
			localStorage.setItem("books", JSON.stringify(books.value));
			loading.value = false;
		} catch (e) {
			console.log(e);
			loading.value = false;
			error.value = true;
		}
	};
	const findBookById = (id: number) => {
		return books.value.find((book) => book.id === id);
	};
	const getBooksFromLocalStorage = () => {
		try {
			books.value = JSON.parse(localStorage.getItem("books") || "");
		} catch (e) {
			localStorage.removeItem("books");
		}
	};
	return { error, loading, fetchBooks, findBookById, books };
});
