import BookListItem from "./BookListItem";
import React from "react";

const BookList = ( { books } ) => {

    return (
        <div className="container">
            <div className="row">
                {books.map((book) => (
                    <BookListItem book={book} key={book.id}/>
                ))}
            </div>
        </div>
    )
}

export default BookList