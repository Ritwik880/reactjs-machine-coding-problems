//react js coding practice 3

import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json');
        const data = await response.json();
        setBooks(data.works);
        setFilteredBooks(data.works);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilter(searchTerm);

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );

    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <label htmlFor="filter">Filter by Title: </label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter a title"
        />
      </div>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.key}>
            {book.title} - {book.author_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
