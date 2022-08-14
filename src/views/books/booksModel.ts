import { get, baseUrl } from "../../helper/fetch";

export interface BookContract {
	title: string;
	id: number;
	image_url: string;
	price: number;
	stock_quantity: number;
	discount_set?: string;
}

export function fetchBooksFromServer(timeout: number = 8000, params?: string) {
	const url = params ? `${baseUrl}/items?filter=${params}` : `${baseUrl}/items`;
	return get<Array<BookContract>>(url, timeout);
}

export function fetchBookFromServer(
	id: number,
	timeout?: number,
	params?: string
) {
	const url = params
		? `${baseUrl}/items/${id}?filter=${params}`
		: `${baseUrl}/${id}/items/${id}`;
	return get<BookContract>(url, timeout);
}
