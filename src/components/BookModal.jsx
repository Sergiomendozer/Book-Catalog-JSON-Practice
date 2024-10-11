import React from 'react'

function BookModal({ book, onClose }) {
  if (!book) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={book.cover} alt={`${book.title} cover`} className="modal-cover" />
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author} ({book.authorNationality})</p>
        <p><strong>Publication Date:</strong> {book.publicationDate}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Summary:</strong> {book.summary}</p>
        <p><strong>Availability:</strong> {book.availability ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  )
}

export default BookModal