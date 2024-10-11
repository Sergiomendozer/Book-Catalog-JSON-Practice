document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            const bookList = document.getElementById('book-list');
            books.forEach(book => {
                const bookCard = createBookCard(book);
                bookList.appendChild(bookCard);
            });
        })
        .catch(error => console.error('Error loading books:', error));
});

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';

    const img = document.createElement('img');
    img.src = book.cover;
    img.alt = `${book.title} cover`;

    const info = document.createElement('div');
    info.className = 'book-info';

    const title = document.createElement('h2');
    title.className = 'book-title';
    title.textContent = book.title;

    const author = document.createElement('p');
    author.className = 'book-author';
    author.textContent = book.author;

    const description = document.createElement('p');
    description.className = 'book-description';
    description.textContent = book.description;

    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(description);

    card.appendChild(img);
    card.appendChild(info);

    return card;
}