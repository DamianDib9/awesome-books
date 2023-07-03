const booksListContainer = document.querySelector('#booksListContainer');
const addButton = document.querySelector('#addButton');
const Title = document.querySelector('#Title');
const Author = document.querySelector('#Author');

let books = [
    {
        title: 'FirstBook',
        author: 'TestyTesty',
    },
    {
        title: 'SecondBook',
        author: 'TestyTesty',
    }
];

function generateBooks() {
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
        const hr = document.createElement('hr');
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(hr);
        booksListContainer.appendChild(bookDiv);
        removeButton.addEventListener('click', () => {
            booksListContainer.removeChild(bookDiv);
        });
    });
};

addButton.addEventListener('click', () => {
    generateBooks();
});
