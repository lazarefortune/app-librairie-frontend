import React, { useState, useEffect } from "react";
import axios from "axios";
import BookListItem from "../components/BookListItem";
import BookList from "../components/BookList";
import CategoryBooksList from "../components/CategoryBooksList";

function HomePage() {
  const [books, setBooks] = useState([]);

  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/api/books");
      setBooks(result.data);
    };
    fetchData();
  }, []);

  // fecth all categories from the API
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:4000/api/categories");
            setCategories(result.data);
        };
        fetchData();
    }, []);

    const handleChangeCategory = async (event) => {
        event.preventDefault();
        const newCategoryId = event.target.value;

        if (newCategoryId === "") {
            const result = await axios("http://localhost:4000/api/books");
            setBooks(result.data);
            setCurrentCategory(null);
            return;
        }

        const result = await axios("http://localhost:4000/api/categories/" + newCategoryId + "/books");

        // fecth category from the API
        const resultCategory = await axios("http://localhost:4000/api/categories/" + newCategoryId);
        setCurrentCategory(resultCategory.data);

        setBooks(result.data);
    }

  return (
    <>
        <div className="container">
        <h4 className="text-center">Tous les livres ({books.length})</h4>
        {/*<BookList books={books} />*/}
            <div className="row">
                <div className="col-12 col-md-3">
                    <h5 className="text-center">Catégories</h5>
                    <ul className="list-group">
                        <li className={"list-group-item" + (currentCategory === null ? " bg-info" : "")}>
                            <button className="btn btn-link text-decoration-none" value="" onClick={handleChangeCategory}>Tous les livres</button>
                        </li>
                        {categories.map((category) => (
                            // list group item when category is selected bg-dark text-white
                            <li className={"list-group-item" + (currentCategory && currentCategory.id === category.id ? " bg-info" : "")}
                                key={category.id}>
                                <button className={"btn btn-link text-decoration-none" } value={category.id} onClick={handleChangeCategory}>{category.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-9">
                    <h5 className="text-center">Livres {currentCategory && "de la catégorie " + currentCategory.name}
                    </h5>
                    <ul className="list-group">
                        <BookList books={books} />
                    </ul>
                </div>
            </div>

        <CategoryBooksList categories={categories} />
        </div>
    </>
  );
}

export default HomePage;
