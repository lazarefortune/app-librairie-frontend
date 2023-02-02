import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const BookListItem = ({ book: bookData }) => {

    const [book, setBook] = useState(bookData)

    const handleAvailable = async () => {
        const result = await axios.patch("http://localhost:4000/api/books/available/" + book.id + "/0")
        setBook(result.data)
    }

    const handleUnavailable = async () => {
        const result = await axios.patch("http://localhost:4000/api/books/available/" + book.id + "/1")
        setBook(result.data)
    }

    return (
        <div className="col-md-4" key={book.id}>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="card-text fw-bold">{book.title}</p>
                    <p className="card-text">
                        {book.available ? <span className="badge bg-success">Disponible</span> : <span className="badge bg-warning">Indisponible</span>}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/books/${book.id}`} className="btn btn-sm btn-outline-success">Consulter</Link>
                            {book.available ?
                                <button type="button" className="btn btn-sm btn-outline-success" onClick={handleAvailable}>Emprunter</button>
                                :
                                <button type="button" className="btn btn-sm btn-outline-warning" onClick={handleUnavailable}>Rendre</button>
                            }
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookListItem