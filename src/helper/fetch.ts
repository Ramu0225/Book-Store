export interface FetchError {
	status: number;
	statusText: string;
	responseText: string;
}
export async function get<T>(url: string): Promise<T> {
	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		return Promise.reject({
			status: "",
			statusText: "",
			responseText: "",
		});
	}
}
