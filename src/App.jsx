import React, { useState, useEffect } from 'react'
import BookList from './components/BookList'
import CategoryTabs from './components/CategoryTabs'
import SearchBar from './components/SearchBar'
import BookModal from './components/BookModal'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error))
  }, [])

  const categories = ['All', 'Fiction', 'Non-Fiction', "Children's Books", 'Mystery']

  const filteredBooks = books.filter(book => {
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleBookClick = (book) => {
    setSelectedBook(book)
  }

  const handleCloseModal = () => {
    setSelectedBook(null)
  }

  return (
    <div className="App">
      <header>
        <h1>Book Catalog</h1>
        <p className="book-count">Total Books: {books.length}</p>
      </header>
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <BookList books={filteredBooks} onBookClick={handleBookClick} />
        {selectedBook && <BookModal book={selectedBook} onClose={handleCloseModal} />}
      </main>
    </div>
  )
}

export default App