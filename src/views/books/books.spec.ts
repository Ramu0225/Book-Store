import { fetchBooksFromServer, BookContract } from "./booksModel";
import { shallowMount, mount } from "@vue/test-utils";
import BooksView from "./BooksView.vue";
import { createTestingPinia } from "@pinia/testing";
import axios, { AxiosError } from "axios";

describe("fetchBooks", () => {
	describe("when API call is successful", () => {
		it("should return books list", async () => {
			const result = await fetchBooksFromServer();
			expect(result.length).toBeGreaterThan(1);
		});
	});

	describe("when API call fails", () => {
		it("should return timeout exception", async () => {
			try {
				await fetchBooksFromServer(500);
			} catch (e) {
				if (e instanceof AxiosError) {
					expect(e.message).toContain("timeout");
				}
			}
		});
		it("should return 4** status code if url is wrong", async () => {
			try {
				await fetchBooksFromServer(
					3000,
					JSON.stringify({ fields: { id: "gfh" } })
				);
			} catch (e) {
				if (e instanceof AxiosError) {
					expect(e.response?.status || "").toBe(400);
				}
			}
		});
	});
});

it("test mounting", () => {
	const wrapper = shallowMount(BooksView, {
		global: {
			plugins: [createTestingPinia()],
		},
	});
});
