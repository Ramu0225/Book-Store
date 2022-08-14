import axios from "axios";
export const baseUrl = "https://frozen-wave-24832.herokuapp.com";

export async function get<T>(url: string, timeout: number = 8000): Promise<T> {
	try {
		const response = await axios.get(url, { timeout });
		return response.data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}
