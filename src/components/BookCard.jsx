import React from 'react'

function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <img src={book.cover} alt={`${book.title} cover`} />
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.summary.slice(0, 100)}...</p>
      </div>
    </div>
  )
}

export default BookCard