import { BooksInCartContract, discountDate, totalBill } from "./cartModel";
const sampleBooksInCart: Array<BooksInCartContract> = [
	{
		id: 1,
		title: "Book 1",
		price: 10.55,
		stock_quantity: 5,
		image_url: "https://picsum.photos/200?random=1",
		discount_set: "books",
		numberOfBooksOrdered: 3,
	},
	{
		id: 2,
		title: "Book 2",
		price: 15,
		stock_quantity: 2,
		image_url: "https://picsum.photos/200?random=2",
		discount_set: "books",
		numberOfBooksOrdered: 2,
	},
];

it("Purchasing on other date", () => {
	const total = totalBill(sampleBooksInCart, "2022-8-22");
	expect(total).toMatch("31.65");
});
it("Purchasing on 1st August(on discount date)", () => {
	const total = totalBill(sampleBooksInCart, discountDate);
	expect(total).toMatch("25.32");
});
