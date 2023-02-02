import React, { useState, useEffect } from "react";
import axios from "axios";
import BookListItem from "../components/BookListItem";
import BookList from "../components/BookList";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/api/books");
      setBooks(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
        <h4 className="text-center">Tous les livres</h4>
        <BookList books={books} />
    </>
  );
}

export default HomePage;
