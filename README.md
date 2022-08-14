# Book-Store

## Introduction:

Web Application is designed with VueJs framework, single page application consist of list of products in one page and ordered list on other page.
The second page displays the product quantity and its price which is added to the total amount for the order.
On 1st of August(local browser time), their is a discount of 20% on the total amount.

## Build:

```
npm install
npm run dev

```

Then, the application is ready to run at
[localhost:8080](http://localhost:8080/).

## Test:

```
npm run test

```

## Design:

Web Application is responsive and user friendly, designed with VueJs framework, vue3, used composition API and Pinia for state management and tested using Jest.

All the components which can be used in total app(ex: loader, error dialog..) are placed in components common folder and remaining components are placed in component folder level. All the components here are dumb components.

on the first load of books page(home) data is fetched on mount and preloder is show when the data is being fetched and error dialog is show on any errors from the api, and it is stored in the local storage to improve the subsquent visits, but also data is fetched from server after, to reconcile the data from backend.

Cart items are also stored in local storage and are fetched on cart page mount, the idea is validate the cart items, i.e checking if book is still available for purchase and show out stock if it's not.
