const booksListContainer = document.querySelector('#booksListContainer');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

let books = [];

function generateBooks() {
    booksListContainer.innerHTML = '';
    books = JSON.parse(localStorage.getItem("Library"));
    books.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'bookDiv';
        const bookTitle = document.createElement('p');
        bookTitle.className = 'bookTitle';
        bookTitle.innerHTML = `${book.title}`;
        const bookAuthor = document.createElement('p');
        bookAuthor.className = 'bookAuthor';
        bookAuthor.innerHTML = `${book.author}`;
        const removeButton = document.createElement('button');
        removeButton.className = 'removeButton';
        removeButton.type = 'button';
        removeButton.innerHTML = 'Remove';
        removeButton.id = `${book.id}`;
        const hr = document.createElement('hr');
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(hr);
        booksListContainer.appendChild(bookDiv);
        removeButton.addEventListener('click', () => {
            removeBook(`${book.id}`);
        });
    });
};

function removeBook(id) {
    books = books.filter(book => book.id !== id);
    localStorage.setItem('Library', JSON.stringify(books));
    generateBooks();
}

function addBook(title, author) {
    let bookObject = {};
    bookObject.title = title;
    bookObject.author = author;
    bookObject.id = title + author;
    books.push(bookObject);
    localStorage.setItem('Library', JSON.stringify(books));
    generateBooks();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook(title.value, author.value);
    form.reset();
});

window.addEventListener("load", () => {
    if (localStorage.getItem("Library")) {
        generateBooks();
    }
});