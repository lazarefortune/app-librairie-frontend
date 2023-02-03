import {useEffect, useState} from "react";
import BookList from "./BookList";
import axios from "axios";

const CategoryBooksListItem = ({ category }) => {

    // fetch all books for this category from the API
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:4000/api/categories/${category.id}/books`);
            setBooks(result.data);
        };
        fetchData();
    }, []);

    return (
        <li className="list-group-item">
            <h5>{category.name}</h5>
            <BookList books={books} />
        </li>
    );
}

export default CategoryBooksListItem;