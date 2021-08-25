# MyReads Project

This is a web application that works as a library to track users' readings. Users can categorize books into three categories: "Currently Reading", "Want to Read" and "Read". They can also search for books that are not in their library and add these books to their library.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Features

* When you open the app, the homepage is on screen.
* The homepage is your library. It is where your books are categorized into 3 sections: Currently Reading, Want to Read and Read.
* Each book has a selector where you can choose to categorize this book into another section or remove it from you library.
* To go to the search page, press on the plus button on the lower right corner in the homepage.
* To search for a book, type the name of the book or the author in the search bar.
* If it is a valid query, search results will appear below the search bar. Otherwise, "No Results Found" will appear.
* In the search results, each book has a selector as well, so you can add it to your library in the section you want.
* To go back to the homepage, just click on the back button on the left of the search bar or use the ordinary back button of the browser.

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── AddBooks.js # A React Component to navigate to the search page.
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # A React Component that renders a book.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksList.js # A React Component that represents the homepage of the app.
    ├── BookStatusSelector.js # A React Component that renders a selector for each book so that the user can categorize books in the shelf they want.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├──
    ├── index.css # Global styles.
    ├── index.js
    ├── ReadingSection.js # A React Component that renders a book shelf.
    ├── SearchBar.js # A React Component that renders the search bar to search for books.
    ├── SearchBooks.js # A React Component that renders the search page of the app.
    └── SearchResults.js # A React Component that renders a section holding the search results of the users input in the search bar.

```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
