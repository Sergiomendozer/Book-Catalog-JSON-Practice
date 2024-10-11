import React from 'react'
import BookCard from './BookCard'

function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.isbn} book={book} onClick={onBookClick} />
      ))}
    </div>
  )
}

export default BookList