import { BookContract } from "../books/booksModel";
export interface BooksInCartContract extends BookContract {
	numberOfBooksOrdered: number;
}
export const discountDate = "2022-8-12";
export const discountPercent = 20;
export const discountApplicable = (discountDate: string) => {
	console.log("in", discountDate);
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const date = new Date(discountDate);
	return today.getTime() === date.getTime();
};
export const totalBill = (
	booksInCart: Array<BooksInCartContract>,
	discountDate: string
) => {
	const total = booksInCart.reduce((acc, book) => {
		acc += book.numberOfBooksOrdered * book.price;
		return acc;
	}, 0);
	if (discountApplicable(discountDate)) {
		const discountedPrice = total - total * (discountPercent / 100);
		//const discountedPrice = 25.22;
		return discountedPrice.toFixed(2);
	}
	return total.toFixed(2);
};
