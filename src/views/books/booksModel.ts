import { get } from "../../helper/fetch";

export interface BookContract {
	title: string;
	id: number;
	image_url: string;
	price: number;
	stock_quantity: number;
	discount_set?: string;
}

export async function fetchBooksFromServer() {
	return get<Array<BookContract>>(
		"https://frozen-wave-24832.herokuapp.com/items/"
	);
}
