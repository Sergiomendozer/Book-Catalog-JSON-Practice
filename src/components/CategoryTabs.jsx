import React from 'react'

function CategoryTabs({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-tabs">
      {categories.map(category => (
        <button
          key={category}
          className={`category-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs