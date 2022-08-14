import {
	BooksInCartContract,
	discountDate,
	totalBill,
	discountApplicable,
} from "./cartModel";
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

describe("when total bill on discount date and other dates", () => {
	it("should return total without any discount on other dates", () => {
		const total = totalBill(sampleBooksInCart, "2022-8-22");
		expect(total).toBe("61.65");
	});
	it("should return total with 20% discount on 1st August(on discount date)", () => {
		const total = totalBill(sampleBooksInCart, discountDate);
		if (discountApplicable(discountDate)) {
			expect(total).toBe("49.32");
		}
	});
});
